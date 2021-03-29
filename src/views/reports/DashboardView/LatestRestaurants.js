/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import moment from "moment";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { staticUrl } from "../../../../config";

const useStyles = makeStyles(({
    root: {
        height: "100%"
    },
    image: {
        height: 48,
        width: 48
    }
}));

const LatestRestaurants = ({ className, ...rest }) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(staticUrl`restaurants/`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(resJson => {
                let latestRest = [];
                if (resJson.restaus) {
                    resJson.restaus.map(restau => {
                        let restToAdd = {
                            id: uuid(),
                            name: restau.label,
                            imageUrl: restau.imgUrl,
                            averageRate: restau.averageRating,
                            updatedAt: moment().subtract(9, "hours")
                        };
                        latestRest.push(restToAdd);
                    });
                    setProducts(latestRest.reverse().slice(0, 5));
                } else {
                    setProducts([]);
                }
            })
            .catch(() => {
                setProducts([]);
            });
    }, []);
    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader
                subtitle={`${products.length} in total`}
                title="Latest Restaurants"
            />
            <Divider />
            <List>
                {products.map((product, i) => (
                    <ListItem
                        divider={i < products.length - 1}
                        key={product.id}
                    >
                        <ListItemAvatar>
                            <img
                                alt="Product"
                                className={classes.image}
                                src={product.imageUrl}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.name}
                            secondary={`Updated ${product.updatedAt.fromNow()}`}
                        />
                        <ListItemText
                            secondary={`Rate ${product.averageRate}/5`}
                        />
                        <IconButton
                            edge="end"
                            size="small"
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
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
                    <a href="/app/products">View all</a>
                </Button>
            </Box>
        </Card>
    );
};

LatestRestaurants.propTypes = {
    className: PropTypes.string
};

export default LatestRestaurants;
