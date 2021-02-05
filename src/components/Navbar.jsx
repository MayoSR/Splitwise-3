import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreIcon from '@material-ui/icons/Restore';
import React from 'react';
import {
    Link
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        '&.MuiBottomNavigation-root':{
            boxShadow:"0px -1px 3px 0px rgba(105,103,103,0.75)"
        }
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const changeRoute = (route) =>{
        history.push("/"+route);
    }

    return (

        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction onClick={() => changeRoute('')} label="Activity" icon={<AssignmentOutlinedIcon/>}>
            </BottomNavigationAction>
            <BottomNavigationAction onClick={() => changeRoute('groups')} label="Groups" icon={<GroupOutlinedIcon />}>
            </BottomNavigationAction>
            <BottomNavigationAction onClick={() => changeRoute('friends')}  label="Friends" icon={<EmojiPeopleOutlinedIcon />}>
            </BottomNavigationAction>
            <BottomNavigationAction label="Account" onClick={() => changeRoute('account')} icon={<AccountBoxOutlinedIcon />}>
            </BottomNavigationAction>

        </BottomNavigation>

    );
}