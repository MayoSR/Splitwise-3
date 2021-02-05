import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import MenuAppBar from './AppBar';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    topHalf: {
        padding: "20px 50px 0px 50px"
    },
    bottomHalf: {
        padding: "20px 40px"
    },
    tabs: {
        overflowX: "scroll",
        display: "flex",
        width: "100%",
        '& > *': {
            marginRight: "20px"
        },
        marginBottom:"20px"
    }
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    

    return (
        <div className={classes.root}>
            <div className={classes.topHalf}>
                <MenuAppBar />
                <Box mt={2}>
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
            </div>
            <div className={classes.bottomHalf}>
                <div className={classes.tabs}>
                    <Typography variant="subtitle1" gutterBottom>
                        Activity
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Activity
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Activity
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Activity
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Activity
                    </Typography>
                </div>
                <Typography variant="body2" display="block" align="left" gutterBottom style={{marginBottom:"20px"}}>
                    July 23, 2020
                </Typography>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: "20px" }} />
                            <Box flexDirection="column" style={{ textAlign: "left" }}>
                                <Typography variant="caption" display="block">
                                    Name
                                </Typography>
                                <Typography variant="caption" display="block" >
                                    paid you
                            </Typography>
                            </Box>
                        </Box>
                        <Typography variant="subtitle2" display="block">
                            + $24.56
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}