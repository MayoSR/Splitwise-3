import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Avatar from '@material-ui/core/Avatar';
import FriendsPay from './minicomponents/FriendsPay'

const useStyles = makeStyles({

    list: {
        width: 275,
        background:"#f5f5f5",
        height:"100%"
    },
    fullList: {
        width: 'auto',
    },
    boxIn:{
        background: "white",
        padding:"15px",
        borderRadius:"15px"
    }
});

export default function SwipeableTemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box mt={2} ml={2}>

                <Typography variant="h6" display="block" style={{fontWeight:"bold"}}>
                    Add participant
                </Typography>
            </Box>
            <Box p={2}>
                <FormControl fullWidth className={classes.margin} variant="filled">
                    <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                    <FilledInput
                        id="filled-adornment-amount"
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>}
                    />
                </FormControl>
            </Box>
            <Box display="flex" p={2} justifyContent="center">
                <PersonAddIcon fontSize="medium" style={{ marginRight: "10px" }} />
                <Typography variant="subtitle1" display="block">
                    Add new friend
                </Typography>
            </Box>
            <List>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Box mt={3}>
                        <FriendsPay name="Peter Drury" paidBy="Owner" />
                        <FriendsPay name="Lewis Hamilton" paidBy="Owner" />
                        <FriendsPay name="Sebastian Vettel" paidBy="Owner" />
                    </Box>
                </Box>
            </List>
            <div style={{position:"fixed",bottom:0,padding:"20px"}}>
                <Button variant="contained" color="primary" style={{width:"235px"}} onClick={() => toggleDrawer("right", false)}>
                    Done
                </Button>
            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            <Box className={classes.boxIn} display="flex" justifyContent="center" alignItems="center" onClick={toggleDrawer("right", true)}>
                <AddCircleIcon fontSize="medium" style={{ marginRight: "10px" }} />
                <Typography variant="h6" display="block">
                    Add participant
                </Typography>
            </Box>
            <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {list("right")}
            </SwipeableDrawer>
        </div>
    );
}
