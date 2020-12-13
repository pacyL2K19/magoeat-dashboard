import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Alert from '@material-ui/lab/Alert';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FacebookIcon from '../../icons/Facebook';
import GoogleIcon from '../../icons/Google';
import Page from '../../components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  rootMore: {
    width: '40%',
    marginLeft: '30%',
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));
const staticUrl = "http://localhost:5000/api/"

const LoginView = () => {
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const values = {
    phone: '',
    password: ''
  }
  const classes = useStyles();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const warningShow = () => {
    if (errorMessage !== '') {
      return (
        <div className={classes.rootMore}>
          <Alert severity="error">{errorMessage}</Alert>
        </div>
      )
    }
  }
  const loginApi = () => {
    // console.log(values)
    fetch(staticUrl+'auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        password: password
      })
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson)
        if (resJson.success) {
          navigate('/app/dashboard', { replace: true });
        } else {
          setErrorMessage(resJson.errorMessage);
        }
      })
      .catch(err => {
        setErrorMessage(err)
      })
  }
  return (
    <Page
      className={classes.root}
      title="Login"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <Formik
            initialValues={
              values
            }
            // validationSchema={Yup.object().shape({
            //   phone: Yup.string().max(10),
            //   password: Yup.string().required('Password is required')
            // })}
            onSubmit={() => {
              // Call to the api 
              loginApi()
            }}
          >
            {({
              errors,
              handleBlur,
              // handleChange,
              handleSubmit,
              // isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Sign in on the internal platform
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      color="primary"
                      fullWidth
                      startIcon={<FacebookIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                  >
                    <Button
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleSubmit}
                      size="large"
                      variant="contained"
                    >
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  mt={3}
                  mb={1}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Phone number"
                  margin="normal"
                  name="phone"
                  onBlur={handleBlur}
                  // onChange={handleChange}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  placeholder="Put your phone number"
                  value={phone}
                  variant="outlined"
                />
                <TextField
                  // error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  // onChange={handleChange}
                  onChange = {(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder=""
                  value={password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    // disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body1"
                >
                  Don&apos;t have an account?
                  {' '}
                  <Link
                    component={RouterLink}
                    to="/register"
                    variant="h6"
                  >
                    Sign up
                  </Link>
                </Typography>
              </form>
            )}
          </Formik>
        </Container>

        {
          warningShow()
        }
        
        {/* <div className={classes.rootMore}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </div> */}
      </Box>
    </Page>
  );
};

export default LoginView;
