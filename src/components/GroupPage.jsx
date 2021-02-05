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

const useStyles = makeStyles((theme) => ({
    root: {
        background: "black",
    },
    backDrop: {
        height: "35vh"
    },
    foreDrop: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        height: "65vh",
        background: "white",
        padding: "20px 40px"
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
    eventCard:{
        padding:"10px",
        border:"1px solid black"
    }
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    const history = useHistory();

    const addEvent = () => {
        history.push("/event");
    }

    return (
        <div className={classes.root}>
            <div className={classes.backDrop}>
                <div className={classes.iconTop}>
                    <ArrowBackIcon fontSize="medium" onClick={() => history.goBack()} />
                    <AddCircleOutlineIcon fontSize="medium" onClick={() => addEvent()} />
                </div>
                <br></br>
                <Box justifyContent="center" flexDirection="column" alignItems="center" className={classes.balance}>
                    <Typography variant="h5" gutterBottom>
                        Paris Summer Vacation
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Last sync on Jul 28,2020
                    </Typography>
                </Box>
            </div>
            <div className={classes.foreDrop}>
                <Box display="flex" justifyContent="space-between" mb={2} mt={2}>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="body2" gutterBottom>
                            Group Spent:
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            $456.78
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="body2" gutterBottom>
                            Total Receiveable:
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            + $924.65
                        </Typography>
                    </Box>
                </Box>
                <Divider style={{ marginBottom: "30px" }} />

                <Typography variant="body2" display="block" className={classes.monthData}>
                    July 23, 2020
                </Typography>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" className={classes.eventCard} justifyContent="space-between" alignItems="center">
                        <Box mr={3}>
                            <MuseumIcon fontSize="large" />
                        </Box>
                        <Box display="flex" flexDirection="column" width={1} onClick={() => {history.push("/events")}}>
                            <Box display="flex" alignItems="center">
                                <Typography variant="body1" className={classes.title} style={{ marginLeft: "10px" }} gutterBottom>
                                    The Louvre
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center" >
                                <Box display="flex">
                                    <Typography variant="subtitle2" className={classes.title} style={{ marginLeft: "10px" }} gutterBottom>
                                        Total: $232.54
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle2" className={classes.title} gutterBottom>
                                        + $534.65
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
