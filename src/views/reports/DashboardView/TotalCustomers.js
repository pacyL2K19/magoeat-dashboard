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
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import PeopleIcon from "@material-ui/icons/PeopleOutlined";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    avatar: {
        backgroundColor: colors.green[600],
        height: 56,
        width: 56
    },
    differenceIcon: {
        color: colors.green[900]
    },
    differenceValue: {
        color: colors.green[900],
        marginRight: theme.spacing(1)
    }
}));

const TotalCustomers = ({ className, ...rest }) => {
    const classes = useStyles();
    const staticUrl = "http://localhost:8080/api/auth/users";
    const [numberOfCustomers, setNumberOfCustomers] = useState(0);
    useEffect (() => {
    //the request to the API to get number of customers
        fetch(staticUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(reJson => {
                if (reJson.users) {
                    setNumberOfCustomers(reJson.users.length);
                } else {
                    setNumberOfCustomers(0);
                }
            })
            .catch();
    }, []);
    const [growth, setGrowth] = useState(0.0);
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
              CUSTOMERS
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {numberOfCustomers}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <PeopleIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                >
                    <ArrowUpwardIcon className={classes.differenceIcon} />
                    <Typography
                        className={classes.differenceValue}
                        variant="body2"
                    >
                        {growth}%
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

TotalCustomers.propTypes = {
    className: PropTypes.string
};

export default TotalCustomers;
