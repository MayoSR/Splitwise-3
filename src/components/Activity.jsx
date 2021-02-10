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
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';
import TopNav from './minicomponents/TopNav';
import Datebox from './minicomponents/Datebox';
import FriendsPay from './minicomponents/FriendsPay';

const useStyles = makeStyles((theme) => ({
    topHalf: {
        padding: "20px 40px 0px 40px"
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
        marginBottom: "20px"
    }
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    let history = useHistory();
    const state = useSelector(state => state.accountDetails);
    
    return (
        <div className={classes.root}>
            <div className={classes.topHalf}>
                <TopNav title="Activity" />
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
                <Datebox date="22 Feb,2021" />
                {
                    state.recentTransactions.map((ele) => {
                        return <FriendsPay name={ele.name} paidBy={ele.status} amount={ele.amount} isPos={ele.paidYou} />
                    })
                }
            </div>
        </div>
    )
}