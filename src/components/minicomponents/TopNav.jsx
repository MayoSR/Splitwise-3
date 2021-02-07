import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    }
}))

export default function TopNav(props) {

    const classes = useStyles()
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { history.goBack() }}>
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {props.title}
                </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <FilterListIcon />
            </IconButton>
        </Box>
    )
}
