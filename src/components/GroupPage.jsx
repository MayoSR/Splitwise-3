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
import FriendsPay from './minicomponents/FriendsPay';
import Datebox from './minicomponents/Datebox';
import {useParams} from "react-router-dom";

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
        background: "#f5f5f5",
        padding: "20px 40px",
        height:"80vh"
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


export default function GroupPage(props) {

    const classes = useStyles()
    const {group} = useParams()
    const groupData = useSelector(state => state.groupData.filter(ele => ele.groupID === group))[0]
    const eventData = groupData.events
    const history = useHistory();

    const addEvent = () => {
        history.push("/event");
    }

    const changeRoute = () => {
        history.push("/eventdetails")
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
                        {groupData.groupName}
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        {console.log(groupData)}
                        Last sync on {groupData.dateCreated}
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
                            ${groupData.totalSpending}
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="body2" gutterBottom>
                            Total Receiveable:
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            + ${groupData.totalReceivable}
                        </Typography>
                    </Box>
                </Box>
                <Divider style={{ marginBottom: "30px" }} />
                <Datebox date="26 Feb,2020" />
                <Box display="flex" flexDirection="column">
                    {eventData.map(ele => {
                        return <FriendsPay changeRoute={changeRoute} type="iconBox" icon ={ele.eventIcon} name={ele.eventName} paidBy={toString(ele.eventDate)} amount={ele.totalSpending} />
                    })}
                </Box>
            </div>
        </div>
    )
}
