import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
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
    }
}))

export default function BackDropContent(props) {

    const classes = useStyles()
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <Box justifyContent="flex-end" className={classes.iconTop}>
                <NotificationsActiveOutlinedIcon fontSize="medium" />
            </Box>
            <Box justifyContent="center" flexDirection="column" alignItems="center" className={classes.balance}>
                <Typography variant="subtitle1" gutterBottom>
                    {props.topText}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {props.bottomText}
            </Typography>
            </Box>
        </>
    )
}
