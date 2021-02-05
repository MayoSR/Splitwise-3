import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";

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
                <Box justifyContent="flex-end" className={classes.iconTop}>
                    <NotificationsActiveOutlinedIcon fontSize="medium" />
                </Box>
                <Box justifyContent="center" flexDirection="column" alignItems="center" className={classes.balance}>
                    <Typography variant="subtitle1" gutterBottom>
                        My Balance
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        $650.65
                    </Typography>
                </Box>
            </div>
            <div className={classes.foreDrop}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="subtitle1" gutterBottom>
                        Activity
                    </Typography>
                    <Box display="flex" >
                        <Typography variant="subtitle1" gutterBottom onClick={() => activityFullScreen()}>
                            See All
                        </Typography>
                        <ChevronRightIcon />
                    </Box>
                </Box>
                <Typography variant="body2" display="block" className={classes.monthData}>
                    July 23, 2020
                </Typography>
                <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{marginRight:"20px"}}/>
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
