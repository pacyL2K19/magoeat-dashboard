/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import {
    Box,
    Container,
    Grid,
    makeStyles
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import Page from "../../../components/Page";
import Toolbar from "./Toolbar";
import ProductCard from "./ProductCard";
import { staticUrl } from "../../../config";
// import data from '../../../helpers/data';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "100%",
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    },
    productCard: {
        height: "100%"
    }
}));

const ProductList = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(staticUrl`restaurants`, {
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
                            totalOrders: 1,
                            media: restau.imgUrl,
                            description: restau.description,
                            averageRate: restau.averageRating,
                            createdAt: restau.opensAt+" - "+restau.closeAt,
                            // updatedAt: moment().subtract(9, 'hours')
                        };
                        latestRest.push(restToAdd);
                    });
                    setProducts(latestRest);
                } else {
                    setProducts([]);
                }
            })
            .catch(() => {
                setProducts([]);
            });
    }, []);
    return (
        <Page
            className={classes.root}
            title="Products"
        >
            <Container maxWidth={false}>
                <Toolbar />
                <Box mt={3}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {products.map((product) => (
                            <Grid
                                item
                                key={product.id}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <ProductCard
                                    className={classes.productCard}
                                    product={product}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box
                    mt={3}
                    display="flex"
                    justifyContent="center"
                >
                    <Pagination
                        color="primary"
                        count={3}
                        size="small"
                    />
                </Box>
            </Container>
        </Page>
    );
};

export default ProductList;
