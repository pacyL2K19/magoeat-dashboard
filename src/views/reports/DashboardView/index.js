/* eslint-disable no-unused-vars */
import React from "react";
import {
    Container,
    Grid,
    makeStyles
} from "@material-ui/core";
import Page from "../../../components/Page";
import Budget from "./Budget";
import LatestOrders from "./LatestOrders";
import TotalCustomers from "./TotalCustomers";
import LatestRestaurants from "./LatestRestaurants";
import LatestMenus from "./LatestMenus";
import TotalProfit from "./TotalProfit";
import TotalRestaurants from "./TotalRestaurants";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: "100%",
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

const Dashboard = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Dashboard"
        >
            <Container maxWidth={false}>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <Budget />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <TotalCustomers />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <TotalRestaurants />
                    </Grid>
                    <Grid
                        item
                        lg={3}
                        sm={6}
                        xl={3}
                        xs={12}
                    >
                        <TotalProfit />
                    </Grid>
                    {/* <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid> */}
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xl={3}
                        xs={12}
                    >
                        <LatestRestaurants />
                    </Grid>
                    <Grid
                        item
                        lg={4}
                        md={6}
                        xl={3}
                        xs={12}
                    >
                        <LatestMenus />
                    </Grid>
                    <Grid
                        item
                        lg={8}
                        md={12}
                        xl={9}
                        xs={12}
                    >
                        <LatestOrders />
                    </Grid>
                </Grid>
            </Container>
        </Page>
    );
};

export default Dashboard;
