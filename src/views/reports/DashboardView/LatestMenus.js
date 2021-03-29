/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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

const data = [
    {
        id: uuid(),
        name: "Crepe | Lappa",
        imageUrl: "/static/images/plats/crepe.jpeg",
        updatedAt: moment().subtract(2, "hours")
    },
    {
        id: uuid(),
        name: "Frites | La Liga",
        imageUrl: "/static/images/plats/frites.jpeg",
        updatedAt: moment().subtract(2, "hours")
    },
    {
        id: uuid(),
        name: "Hamburger | Les volcans",
        imageUrl: "/static/images/plats/hamburger.png",
        updatedAt: moment().subtract(3, "hours")
    },
    {
        id: uuid(),
        name: "Pizza | Lappa",
        imageUrl: "/static/images/plats/pizza.jpg",
        updatedAt: moment().subtract(5, "hours")
    },
    {
        id: uuid(),
        name: "Shawarma | Maghali",
        imageUrl: "/static/images/plats/shawarma.jpg",
        updatedAt: moment().subtract(9, "hours")
    }
];

const useStyles = makeStyles(({
    root: {
        height: "100%"
    },
    image: {
        height: 48,
        width: 48
    }
}));

const LatestMenus = ({ className, ...rest }) => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const staticUrl="http://localhost:5000/api/repas/";
    useEffect(() => {
        fetch(staticUrl, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(resJson => {
                let latestMeal = [];
                if (resJson.rep) {
                    setProducts(resJson.rep);
                } else {
                    setProducts(latestMeal);
                }
            })
            .catch(err => {
                alert("Une erreur s'est produite, veuillez reesayer");
            });
    }, []);
    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader
                subtitle={`${products.length} in total`}
                title="Latest Meals"
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
                                src={product.imgUrl}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={product.label+" | Restaurant Id: "+product.idRestau.substring(0, 5)}
                            // secondary={`Updated ${product.updatedAt.fromNow()}`}
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
          View all
                </Button>
            </Box>
        </Card>
    );
};

LatestMenus.propTypes = {
    className: PropTypes.string
};

export default LatestMenus;
