import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const CustomerListView = () => {
  const classes = useStyles();
  const staticUrl = 'http://localhost:5000/api/auth/users';
  const [customers, setCustomers] = useState(data);
  useEffect(() => {
    fetch(staticUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(resJson => {
        const users = [];
        if (resJson.users) {
          setCustomers(resJson.users);
        } else {
          setCustomers(users)
        }
      })
      .catch(err => {
        alert(err+' Quelque chose ne va pas bien')
      })
  }, [])
  return (
    <Page
      className={classes.root}
      title="Customers"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
