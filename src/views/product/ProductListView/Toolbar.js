import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Dropdown } from 'semantic-ui-react'
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Grid
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Search as SearchIcon } from 'react-feather';
import Buttons from './Buttons';

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
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Toolbar = ({ className, ...rest }) => {
  const staticUrl = 'http://localhost:5000/api/auth/owners'
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [address, setAddress] = React.useState('');
  const [imgUrl, setImgUrl] = React.useState('');
  const [restaurantName, setRestaurantName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [owners, setOwners] = React.useState([]);
  const [owner, setOwner] = React.useState('')
  const [openTime, setOpenTime] = React.useState('07:30')
  const [closeTime, setCloseTime] = React.useState('20:30')
  // dropdown reseter
  
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
        const ownersL = []
        resJson.owners.map(ow => {
          let owx = {
            key: ow._id,
            text: ow.username,
            value: ow._id,
          }
          ownersL.push(owx);
        })
        setOwners(ownersL);
      })
      .catch(err => {
        alert(err);
      })
  }, [])
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeName = (event) => {
    setRestaurantName(event.target.value);
  };
  const handleDropdownChange = (e, {value}) => {
    setOwner(value);
    console.log(value)
  }
  const handleSave = () => {
    alert('Successfully saved');
    setOpen(false);
  }
  const handleCancel = () => {
    setOpen(false);
  }
  const restaurant = {
      label: restaurantName,
      adress: address,
      description: description,
      imgUrl,
      ownerId: owner,
      opensAt: openTime.toString(),
      closeAt: closeTime.toString()
  }
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
                value={restaurantName}
                onChange={handleChangeName}
                variant="outlined"
                margin='normal'
                size='small'
                fullWidth
              />
              <Dropdown 
                placeholder='Select the owner' 
                search
                onChange = {handleDropdownChange}
                selection
                value={owner}
                options={owners}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Image URL"
                rowsMax={4}
                value={imgUrl}
                margin='normal'
                onChange={(event) => {setImgUrl(event.target.value)}}
                variant="outlined"
                margin='normal'
                size='small'
                fullWidth
              />
              <div style={{margin: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextField
                  id="time"
                  label="Opens at"
                  type="time"
                  defaultValue="07:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  onChange = {(e) => {setOpenTime(e.target.value)}}
                  value={openTime}
                />
                <TextField
                  id="time"
                  label="Closes at"
                  type="time"
                  defaultValue="20:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                  onChange = {(e) => {setCloseTime(e.target.value)}}
                  value={closeTime}
                />
              </div>
              <TextField
                id="outlined-textarea"
                label="Address"
                placeholder="Put address"
                multiline
                variant="outlined"
                size='small'
                fullWidth
                value={address}
                onChange={(e) => {setAddress(e.target.value)}}
              />
              <TextField
                id="outlined-multiline-static"
                label="Add description"
                multiline
                rows={6}
                margin='normal'
                defaultValue=""
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Buttons restaurant={restaurant} onCancel={handleClose} onSave={handleSave} />
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
