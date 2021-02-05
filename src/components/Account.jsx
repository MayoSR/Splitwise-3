import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "black",
    },
    backDrop: {
        height: "25vh",
        color:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    foreDrop: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        height: "75vh",
        background: "white",
        padding: "20px 40px",

    },
    iconTop: {
        '& svg': {
            color: "white",
        },
        textAlign: "right",
        padding: "30px"
    },
    balance: {
        color: "white"
    },
    monthData: {
        marginTop: "15px",
        marginBottom: "15px",
        textAlign: "left"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
      },
      profileIcons:{
          border:"1px solid black"
      }
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    const history = useHistory();

    const activityFullScreen = () =>{
        history.push("/activity");
    }

    return (
        <div className={classes.root}>
            <div className={classes.backDrop}>
                <Box display="flex">
                    <Avatar className={classes.large} alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight:"20px"}}/>
                    <Box display="flex" flexDirection="column">
                        <Typography variant="h6" align="left">
                            Firstname Lastname
                        </Typography>
                        <Typography variant="subtitle2" align="left" gutterBottom>
                            xyz@gmail.com
                        </Typography>
                    </Box>
                </Box>
            </div>
            <div className={classes.foreDrop}>
                <Box display="flex" justifyContent="space-evenly">
                    <Box m={2} p={1} pt={2} pb={2} className={classes.profileIcons} display="flex" flexDirection="column" alignItems="center" flexGrow="1" flexBasis="0">
                        <FolderOpenOutlinedIcon fontSize="large" />
                        <br></br>
                        <Typography variant="subtitle2" align="left" gutterBottom>
                            Profile
                        </Typography>
                    </Box>
                    <Box m={2} p={1} pt={2} pb={2} className={classes.profileIcons} display="flex" flexDirection="column" alignItems="center" flexGrow="1" flexBasis="0" onClick={() => history.push("spending")}>
                        <AssessmentOutlinedIcon fontSize="large" />
                        <br></br>
                        <Typography variant="subtitle2" align="left" gutterBottom>
                            Spending
                        </Typography>
                    </Box>
                    <Box m={2} p={1} pt={2} pb={2} className={classes.profileIcons} display="flex" flexDirection="column" alignItems="center" flexGrow="1" flexBasis="0">
                        <SettingsOutlinedIcon fontSize="large" />
                        <br></br>
                        <Typography variant="subtitle2" align="left" gutterBottom>
                            Settings
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
