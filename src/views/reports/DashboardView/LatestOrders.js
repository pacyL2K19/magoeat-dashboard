/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip,
    makeStyles
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Dropdown } from "semantic-ui-react";
import { staticUrl } from "../../../../config"; 

const useStyles = makeStyles(() => ({
    root: {},
    actions: {
        justifyContent: "flex-end"
    }
}));

const LatestOrders = ({ className, ...rest }) => {
    const data = [
        {
            key: 1,
            text: "Placed",
            value: "PLACED",
        },
        {
            key: 2,
            text: "Accepted",
            value: "ACCEPTED",
        },
        {
            key: 3,
            text: "On the road",
            value: "ON_THE_ROAD",
        },
        {
            key: 4,
            text: "Canceled",
            value: "CANCELED",
        },
    ];
    const classes = useStyles();
    const [orders, setOrders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [status, setStatus] = React.useState("");
    const handleDropdownChange = (e, {value}) => {
        setStatus(value);
    };
    useEffect (() => {
        fetch(staticUrl+"orders", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(resJson => {
                if (resJson.orders) {
                    let ordersToDisplay = [];
                    resJson.orders.map(order => {
                        let ord = {
                            id: order._id,
                            ref: order._id,
                            amount: order.amount,
                            customer: {
                                name: order.idUser
                            },
                            createdAt: order.date.toString(),
                            status: order.status
                        };
                        ordersToDisplay.push(ord);
                    });
                    setOrders(ordersToDisplay.reverse());
                } else {
                    setOrders([]);
                }
            })
            .catch(() => console.log("Something bad"));
    }, []);
    const [orderId, setOrderId] = useState("");
    const handleUpdateStatus = () => {
    // setOrderId
        fetch(staticUrl+"order/update/"+orderId, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                status
            })
        })
            .then(res => res.json())
            .then(resJson => {
                if (resJson.success) {
                    alert(resJson.message);
                    setOpen(false);
                } else {
                    alert(resJson.message);
                }
            })
            .catch(err => {
                alert(err);
            });
    };
    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader title="Latest Orders" />
            <Divider />
            <PerfectScrollbar>
                <Box minWidth={900}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                  Order Ref
                                </TableCell>
                                <TableCell>
                  Customer Id
                                </TableCell>
                                <TableCell sortDirection="desc">
                                    <Tooltip
                                        enterDelay={300}
                                        title="Sort"
                                    >
                                        <TableSortLabel
                                            active
                                            direction="desc"
                                        >
                      Date
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                  Amount
                                </TableCell>
                                <TableCell>
                  Status
                                </TableCell>
                                <TableCell>
                  Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                    hover
                                    key={order.id}
                                >
                                    <TableCell>
                                        {order.ref}
                                    </TableCell>
                                    <TableCell>
                                        {order.customer.name}
                                    </TableCell>
                                    <TableCell>
                                        {order.createdAt}
                                    </TableCell>
                                    <TableCell>
                                        {order.amount}
                                    </TableCell>
                                    <TableCell>
                                        <Chip
                                            color="primary"
                                            label={order.status}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button onClick={() => {setOpen(true); setOrderId(order.id);}} variant="contained" color="primary">
                      Update Status
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <Box
                display="flex"
                justifyContent="flex-end"
                p={2}
            >
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon />}
                    size="small"
                    variant="text"
                >
          View all
                </Button>
            </Box>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                style={{
                    width: "30%",
                    marginLeft: "auto",
                    marginRight: "auto"
                }}
                // onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open} style={{backgroundColor: "white", padding: 30}}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <h2 style={{fontFamily: "sans-serif"}}>Update order status ID :</h2>
                        <p>{orderId}</p>
                        <div>
                            <Dropdown 
                                placeholder='Select the owner' 
                                search
                                onChange = {handleDropdownChange}
                                selection
                                value={status}
                                options={data}
                            />
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <Button color='primary' type='button' onClick={handleUpdateStatus}>Update</Button>
                            <Button color='primary' type='button' onClick={() => setOpen(false)}>Cancel</Button>
                        </div>
                    </form>
                </Fade>
            </Modal>
        </Card>
    );
};

LatestOrders.propTypes = {
    className: PropTypes.string
};

export default LatestOrders;
