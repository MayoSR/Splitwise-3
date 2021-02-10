import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonIcon from '@material-ui/icons/Person';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import IconButton from '@material-ui/core/IconButton';
import {bookmark,removeBookmark} from '../../redux/actions/index';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "white",
        padding:"15px",
        borderRadius:"15px",
        marginBottom:"20px"
    },
    title:{
        fontWeight:"bold"
    },
    cost:{
        fontWeight:"bold"
        
    }
}))

export default function GroupComponent(props) {

    const classes = useStyles()
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const openGroup = (groupID) =>{
        history.push("/group/"+groupID)
    }


    return (
        <div className={classes.root}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="body1" className={classes.title} gutterBottom>
                    {props.eventname}
                </Typography>
                {props.isBookmarked === true ? <BookmarkIcon onClick={() => dispatch(removeBookmark(props.groupID))}/> : <BookmarkBorderIcon onClick={() => dispatch(bookmark(props.groupID))} />}
            </Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" onClick={() => openGroup(props.groupID)}>
                <Box display="flex" flexDirection="column" width={1}>
                    <Box display="flex" alignItems="center">
                        <PersonIcon fontSize="small" />
                        <Typography variant="subtitle2" style={{ marginLeft: "10px" }} gutterBottom>
                            {props.noOfFriends} Friends
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" >
                        <Box display="flex">
                            <MonetizationOnIcon fontSize="small" />
                            <Typography variant="subtitle2" style={{ marginLeft: "10px" }} gutterBottom>
                                {props.noOfExpenses} expenses
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" className={classes.title} gutterBottom>
                                + ${props.cost}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
