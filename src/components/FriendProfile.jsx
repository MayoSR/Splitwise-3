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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import FriendsPay from './minicomponents/FriendsPay';
import Datebox from './minicomponents/Datebox';
import ActivityExpandLine from './minicomponents/ActivityExpandLine';

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
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    reminder: {
        borderRadius:"15px",
        color:"white",
        background:"#0dae6a"
    },
    costBox: {
        border: "1px solid black",
        padding: "15px"
    },
    buttonColor:{
        background:"#fbc96a",
        fontWeight:"bold"
    }
}));


export default function FriendProfile() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    let history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.topHalf}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { history.goBack() }}>
                        <ArrowBackIcon />
                    </IconButton>

                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FilterListIcon />
                    </IconButton>
                </Box>
            </div>
            <div className={classes.bottomHalf}>
                <Box display="flex" mb={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: "20px" }} className={classes.large} />
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" display="block" align="left">
                            Firstname Lastname
                        </Typography>
                        <Typography variant="subtitle2" display="block" align="left">
                            Not joined yet. <Link href="#" onClick={(e) => e.preventDefault()} variant="body2">
                                Resend invitation
                                        </Link>
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-start" mb={3} p={3} className={classes.reminder}>
                    <Typography variant="subtitle2" display="block" gutterBottom>
                        Receivable
                    </Typography>
                    <Box display="flex" justifyContent="space-between" width={1} alignItems="center">
                        <Typography variant="h5" display="block">
                            + $24.56
                        </Typography>
                        <Button variant="contained" className={classes.buttonColor} color="#000" size="medium" startIcon={<NotificationsActiveIcon />}>
                            Remind
                        </Button>
                    </Box>
                </Box>
                <ActivityExpandLine leftText="Activity" />
                <Datebox date="Jul 21,2020" />
                <Box display="flex" flexDirection="column">
                    <FriendsPay  type="iconBox" icon ={<ConfirmationNumberOutlinedIcon fontSize="large" style={{marginRight: "20px"}} />} name="Louvre Museum" paidBy="26 Jul,2020" amount="650" />
                </Box>
            </div>
        </div>
    )
}