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
import RestaurantIcon from "@material-ui/icons/Restaurant";
import { reject } from "lodash";
import { staticUrl } from "../../../config";

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

const TotalRestaurants = ({ className, ...rest }) => {
    const classes = useStyles();
    const [numberOfRestaurants, setnumberOfRestaurants] = useState(0.0);
    const [growth, setGrowth] = useState(0.0);
    useEffect (() => {
    //the request to the API to get number of customers
        fetch(staticUrl+"restaurants", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
            }
        })
            .then(response => response.json())
            .then(resJson => {
                if (!resJson.restaus) {
                    setGrowth(0.0);
                    setnumberOfRestaurants(10);
                } else {
                    setnumberOfRestaurants(resJson.restaus.length);
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
              RESTAURANTS
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            {numberOfRestaurants}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar} style = {{backgroundColor : "#000000"}}>
                            <RestaurantIcon />
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

TotalRestaurants.propTypes = {
    className: PropTypes.string
};

export default TotalRestaurants;
