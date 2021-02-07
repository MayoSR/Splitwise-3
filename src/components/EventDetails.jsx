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
                <Typography variant="body1" className={classes.title} align="left">
                    All Friends
                        </Typography>
                <Box display="flex" flexDirection="column" pt={3} mb={1}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.friend} onClick={() => history.push("profile")}>
                        <Box display="flex" alignItems="center">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ marginRight: "20px" }} />
                            <Typography variant="body1" className={classes.title} align="left">
                                Firstname Lastname
                                    </Typography>
                        </Box>
                        <Typography variant="body1" className={classes.title} align="left">
                            + $63.67
                                </Typography>
                    </Box>
                </Box>
                <Box mt={4}>
                    <SwipeableDrawer />
                </Box>
            </div>
        </div>
    )
}
