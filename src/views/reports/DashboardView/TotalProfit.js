/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
    makeStyles,
    colors
} from "@material-ui/core";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { staticUrl } from "../../../config";

const useStyles = makeStyles(() => ({
    root: {
        height: "100%"
    },
    avatar: {
        backgroundColor: colors.indigo[600],
        height: 56,
        width: 56
    }
}));

const TotalProfit = ({ className, ...rest }) => {
    const classes = useStyles();
    const [totalProfits, setTotalProfits] = useState(0.0);
    useEffect (() => {
    //the request to the API to get number of customers
        fetch(staticUrl+"order/orders", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            }
        })
            .then(response => response.json())
            .then(resJson => {
                if (!resJson.orders) {
                    setTotalProfits(0.0);
                } else {
                    let closedOrders = [];
                    let totProf = 0.0;
                    for (let order of resJson.orders) {
                        if (order.status === "CLOSED") {
                            closedOrders.push(order);
                            totProf += ((order.amount)*0.3);
                        }
                    }
                    setTotalProfits(totProf.toFixed(3));
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
              PROFIT
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
              ${totalProfits}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <AttachMoneyIcon />
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

TotalProfit.propTypes = {
    className: PropTypes.string
};

export default TotalProfit;
