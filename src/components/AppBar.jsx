import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {

    },
    title:{
        marginLeft:"auto",
        marginRight:"auto",
    }
}));

export default function MenuAppBar() {
    const classes = useStyles();
    let history = useHistory();

    return (
        <div className={classes.root}>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <ArrowBackIcon onClick={() => {history.goBack()}} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Activity
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <FilterListIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}
