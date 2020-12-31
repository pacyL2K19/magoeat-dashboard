import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Search as SearchIcon } from 'react-feather';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {},
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '25ch',
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDateChange = (date) => {
    // setSelectedDate(date);
    console.log('Test')
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Button className={classes.importButton}>
          Import
        </Button>
        <Button className={classes.exportButton}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
          onClick = {() => setOpen(true)}
        >
          Add product
        </Button>
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        style={{
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open} style={{backgroundColor: 'white', padding: 30}}>
          <form className={classes.root} noValidate autoComplete="off">
            <h2 style={{fontFamily: 'sans-serif'}}>Add new Restaurant</h2>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Restaurant Name"
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
                margin='normal'
                size='small'
                fullWidth
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Owner userId"
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
                margin='normal'
                size='small'
                fullWidth
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Image URL"
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
                margin='normal'
                size='small'
                fullWidth
              />
              <KeyboardTimePicker
                margin="normal"
                id="time-picker"
                label="Time picker"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
              <TextField
                id="outlined-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="outlined"
                size='small'
                fullWidth
              />
              <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />
            </div>
          </form>
        </Fade>
      </Modal>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
