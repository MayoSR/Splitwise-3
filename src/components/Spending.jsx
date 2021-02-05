import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonIcon from '@material-ui/icons/Person';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useHistory } from "react-router-dom";
import LinearProgress from '@material-ui/core/LinearProgress';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 25,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
    },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "40px"
    },
    bottomNav: {
        display: "flex",
        justifyContent: "space-between"
    },
    friend:{
        border:"1px solid black",
        padding:"10px"
    },
    iconClass:{
        marginRight:"10px"
    }

}));
export default function Groups() {

    const classes = useStyles()
    const drawerState = useSelector(state => state.drawerState)
    const history = useHistory();



    const changeRoute = () => {
        history.push("/newgroup");
    }

    const openGroup = () => {
        history.push("/addfriends")
    }

    return (
        <div className={classes.root}>
            <Box className={classes.topNav} mb={5}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" className={classes.title}>
                        Spending
                    </Typography>
                    <Box>
                        <SearchIcon fontSize="large" style={{ marginRight: "20px" }} />
                        <AddBoxIcon onClick={() => changeRoute()} fontSize="large" />
                    </Box>
                </Box>
            </Box>
            <div className={classes.bottomNav}>
                <Box>
                    <Typography variant="subtitle2" className={classes.title} gutterBottom>
                        You Spent
                    </Typography>
                    <Typography variant="h5" className={classes.title} align="right">
                        $423.21
                    </Typography>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Typography variant="subtitle2" className={classes.title} gutterBottom>
                        Total Receiveable
                    </Typography>
                    <Typography variant="h5" className={classes.title} align="left">
                        + $938.82
                    </Typography>
                </Box>
            </div>
            <Box mt={3} mb={3}>
                <Divider />
            </Box>
            <Typography variant="body1" className={classes.title} align="left">
                Spending Breakdown
            </Typography>
            <Box mt={2} mb={5}>
                <BorderLinearProgress variant="determinate" value={50} />
            </Box>
            <Grid container spacing={3}>

                {[<ConfirmationNumberOutlinedIcon className={classes.iconClass} fontSize="large" />,
                <ShoppingCartOutlinedIcon className={classes.iconClass} fontSize="large" />,
                <LocalDiningOutlinedIcon className={classes.iconClass} fontSize="large" />,
                <HelpOutlinedIcon className={classes.iconClass} fontSize="large" />,
                <FlightOutlinedIcon className={classes.iconClass} fontSize="large" />,
                <ColorLensOutlinedIcon className={classes.iconClass} fontSize="large" />].map((icon) => {

                    return (
                    <Grid item xs={6}>
                        <Box display="flex" alignItems="center" onClick={() => {history.push("/spent")}}>
                            {icon}
                            <Box display="flex" flexDirection="column">
                                <Typography variant="caption" className={classes.title}>
                                    Receiveable
                                </Typography>
                                <Typography variant="subtitle2" className={classes.title} align="left">
                                    + $938.82
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    )
                })}

            </Grid>
        </div>
    )
}
