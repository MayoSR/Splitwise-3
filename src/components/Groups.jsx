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
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { useHistory } from "react-router-dom";

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
            <Box className={classes.topNav} mb={5}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" className={classes.title}>
                        Groups
                    </Typography>
                    <Box>
                        <SearchIcon fontSize="large" style={{ marginRight: "20px" }} />
                        <AddBoxIcon onClick={() => changeRoute()} fontSize="large" />
                    </Box>
                </Box>
            </Box>
            <div className={classes.bottomNav}>
                <Box className={classes.quickAccess} mb={5}>
                    <Box mb={3}>
                        <Typography variant="subtitle2" className={classes.title} align="left">
                            Quick Access
                    </Typography>
                    </Box>
                    <div className={classes.groups}>
                        <div className={classes.groupComponent}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body2" className={classes.title} gutterBottom>
                                    Paris Summer Vacation
                                </Typography>
                                <BookmarkIcon />
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center" onClick={() => openGroup()}>
                                <Box display="flex" flexDirection="column" width={1}>
                                    <Box display="flex" alignItems="center">
                                        <PersonIcon fontSize="small" />
                                        <Typography variant="body2" className={classes.title} style={{ marginLeft: "10px" }} gutterBottom>
                                            4 Friends
                                        </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" >
                                        <Box display="flex">
                                            <MonetizationOnIcon fontSize="small" />
                                            <Typography variant="body2" className={classes.title} style={{ marginLeft: "10px" }} gutterBottom>
                                                4 expenses
                                        </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" className={classes.title} gutterBottom>
                                                + $534.65
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </Box>
                <Box className={classes.allGroups} mb={5}>
                    <Box mb={3}>
                        <Typography variant="subtitle2" className={classes.title} align="left">
                            All Groups
                        </Typography>
                    </Box>
                    <div className={classes.groups}>
                        <div className={classes.groupComponent}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                                <Typography variant="body2" className={classes.title} gutterBottom>
                                    Avengers Endgame
                                </Typography>
                                <BookmarkBorderIcon />
                            </Box>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Box display="flex" flexDirection="column" width={1}>
                                    <Box display="flex" alignItems="center">
                                        <PersonIcon fontSize="small" />
                                        <Typography variant="body2" className={classes.title} style={{ marginLeft: "10px" }} gutterBottom>
                                            2 Friends
                                    </Typography>
                                    </Box>
                                    <Box display="flex" justifyContent="space-between" alignItems="center" >
                                        <Box display="flex">
                                            <MonetizationOnIcon fontSize="small" />
                                            <Typography variant="body2" className={classes.title} style={{ marginLeft: "10px" }} gutterBottom>
                                                2 expenses
                                        </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" className={classes.title} gutterBottom>
                                                + $132.35
                                        </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </Box>
            </div>
        </div>
    )
}
