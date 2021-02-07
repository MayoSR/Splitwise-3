import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { useHistory } from "react-router-dom";
import TopNavTab from './minicomponents/TopNavTab';
import ActivityExpandLine from './minicomponents/ActivityExpandLine';
import GroupComponent from './minicomponents/GroupComponent';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "40px"
    },

}));
export default function Groups() {

    const classes = useStyles()
    const drawerState = useSelector(state => state.drawerState)
    const history = useHistory();

    const changeRoute = () =>{
        history.push("/newgroup");
    }

    const openGroup = () =>{
        history.push("/group")
    }

    return (
        <div className={classes.root}>
            <TopNavTab title="Groups" />
            <div className={classes.bottomNav}>
                <Box className={classes.quickAccess} mb={5}>
                    <ActivityExpandLine leftText="Recent" />
                    <div className={classes.groups}>
                        <GroupComponent eventname="Paris Summer vacation" noOfFriends="4" noOfExpenses="4" cost="564.34" isBookmarked="true" />
                    </div>
                </Box>
                <Box className={classes.allGroups} mb={5}>
                <ActivityExpandLine leftText="All Groups" />
                    <div className={classes.groups}>
                        <GroupComponent eventname="Avengers Endgame" noOfFriends="3" noOfExpenses="6" cost="83.15" />
                    </div>
                </Box>
            </div>
        </div>
    )
}
