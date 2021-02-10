import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Divider from '@material-ui/core/Divider';
import MuseumIcon from '@material-ui/icons/Museum';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import SwipeableDrawer from './SwipeableDrawer'
import ActivityExpandLine from './minicomponents/ActivityExpandLine';
import FriendsPay from './minicomponents/FriendsPay';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    },
    backDrop: {
        height: "35vh"
    },
    foreDrop: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        height: "65vh",
        background: "#f5f5f5",
        padding: "40px",
    },
    iconTop: {
        '& svg': {
            color: "white",
        },
        padding: "30px",
        display: "flex",
        justifyContent: "space-between"
    },
    balance: {
        color: "white"
    },
    monthData: {
        marginTop: "15px",
        marginBottom: "15px",
        textAlign: "left"
    },
    eventCard: {
        padding: "10px",
        border: "1px solid black"
    },
    friend: {
        border: "1px solid black",
        padding: "10px"
    }
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.backDrop}>
                <div className={classes.iconTop}>
                    <ArrowBackIcon fontSize="medium" onClick={() => history.goBack()} />
                    <DeleteOutlineIcon fontSize="medium" />
                </div>
                <br></br>
                <Box justifyContent="center" flexDirection="column" alignItems="center" className={classes.balance}>
                    <Typography variant="h5" gutterBottom>
                        Louvre Museum
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        $536.24
                    </Typography>
                </Box>
            </div>
            <div className={classes.foreDrop}>
                <ActivityExpandLine leftText="All Friends" />
                <FriendsPay name="Firstname Lastname" paidBy="owes" amount="246"  />
                <Box mt={4}>
                    <SwipeableDrawer />
                </Box>
            </div>
        </div>
    )
}
