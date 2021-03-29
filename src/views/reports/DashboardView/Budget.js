/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoneyIcon from "@material-ui/icons/Money";
import { staticUrl } from "../../../../config";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    avatar: {
        backgroundColor: colors.red[600],
        height: 56,
        width: 56
    },
    differenceIcon: {
        color: colors.red[900]
    },
    differenceValue: {
        color: colors.red[900],
        marginRight: theme.spacing(1)
    }
}));

const Budget = ({ className, ...rest }) => {
    const classes = useStyles();
    const [ amount, setAmount ] = useState(0.0);
    const [ gains, setGains ] = useState(0.0); // to retrieve from database
    useEffect(() => {
        fetch(staticUrl`order/orders`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            }
        })
            .then(response => response.json())
            .then(resJson => {
                if (!resJson.orders) {
                    setAmount(0.0);
                } else {
                    let totProf = 0.0;
                    for (let order of resJson.orders) {
                        // if (order.status === "CLOSED") {
                        //   closedOrders.push(order);
                        //   totProf += ((order.amount)*0.3);
                        // }
                        totProf += order.amount;
                    }
                    setAmount(totProf.toFixed(3));
                }
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
              BUDGET
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
              ${amount}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <MoneyIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                >
                    <ArrowDownwardIcon className={classes.differenceIcon} />
                    <Typography
                        className={classes.differenceValue}
                        variant="body2"
                    >
                        {gains}%
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="caption"
                    >
            Since last month
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

Budget.propTypes = {
    className: PropTypes.string
};

export default Budget;
