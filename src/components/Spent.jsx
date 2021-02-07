import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import { Divider } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        height:"20px"
    },
    backDrop: {
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white"
    },
    foreDrop: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        height: "75vh",
        background: "#f5f5f5",
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
    },
    iconBox:{
        border:"1px solid black"
    },
    costBox:{
        border:"1px solid black",
        padding:"15px"
    }
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    const history = useHistory();

    const activityFullScreen = () => {
        history.push("/activity");
    }

    return (
        <div className={classes.root}>
            <div className={classes.backDrop}>
                <ConfirmationNumberOutlinedIcon />
                <br></br>
                <br></br>
                <Typography variant="h4" gutterBottom>
                    Entertainment
                </Typography>
            </div>
            <div className={classes.foreDrop}>
                <Box mt={3}>
                    <Typography variant="subtitle2" gutterBottom align="left">
                        You've spent:
                    </Typography>
                    <Box display="flex" alignItems="center">
                        <Typography variant="h5" style={{ marginRight: "10px", height: "38px" }}>
                            $856.76
                        </Typography>
                        <Typography variant="subtitle2">
                            on entertainment this month
                        </Typography>
                    </Box>
                </Box>
                <Box mt={3} mb={1}>
                    <Divider />
                </Box>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body1" gutterBottom align="left" style={{marginTop:"25px"}}>
                        History
                    </Typography>
                    <Box width={0.4}>
                        <FormControl className={classes.formControl}>
                            <NativeSelect
                                name="age"
                                className={classes.selectEmpty}
                                inputProps={{ 'aria-label': 'age' }}
                                >
                                <option value="">This month</option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </FormControl>
                    </Box>
                </Box>
                <Box display="flex" flexDirection="column" mt={3} >
                    <Box display="flex" alignItems="center" className={classes.costBox}>
                        <Box style={{padding:"3px",marginRight:"10px"}} className={classes.iconBox}>
                            <ConfirmationNumberOutlinedIcon fontSize="large" />
                        </Box>
                        <Box flexDirection="column" display="flex" width={1}>
                            <Typography variant="subtitle2" align="left" >
                                History
                            </Typography>
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="subtitle2" align="left">
                                    26 Jul
                                </Typography>
                                <Typography variant="subtitle2" align="left">
                                    $150.65
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}
