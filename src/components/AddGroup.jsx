import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonIcon from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDispatch } from 'react-redux'
import {openDrawer} from '../redux/actions/index'
import SwipeableDrawer from './SwipeableDrawer'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "40px"
    },

}));
export default function Groups() {

    const classes = useStyles()
    const events = useSelector(state => state.groups)
    const drawerState = useSelector(state => state.drawerState)
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <Box className={classes.topNav} mb={5}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box>
                        <CloseIcon fontSize="large" onClick={() => { history.goBack() }} />
                    </Box>
                    <Typography variant="h5" className={classes.title}>
                        Done
                    </Typography>
                </Box>
                <Box mt={2}>
                    <FormControl fullWidth className={classes.margin} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Group Name</InputLabel>
                        <FilledInput
                            id="filled-adornment-amount"
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>}
                        />
                    </FormControl>
                </Box>
                <Box mt={4}>
                    <Typography variant="body1" className={classes.title} align="left">
                        Add participants
                    </Typography>
                    <Box mt={3}>
                        <Box display="flex" mb={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: "20px" }} />
                            <Box flexDirection="column" style={{ textAlign: "left" }}>
                                <Typography variant="body1" display="block">
                                    Harry
                                </Typography>
                                <Typography variant="subtitle2" display="block" >
                                    owner
                                </Typography>
                            </Box>
                        </Box>
                        
                        <SwipeableDrawer anchor={"right"} open={true} />
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
