import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    }
}))

export default function FriendsPay(props) {

    const classes = useStyles()
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        
    )
}
