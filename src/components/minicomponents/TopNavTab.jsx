import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    }
}))

export default function TopNavTab(props) {

    const classes = useStyles()
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const changeRoute = () =>{
        history.push("/newgroup");
    }

    const openGroup = () =>{
        history.push("/group")
    }

    return (
        <Box className={classes.topNav} mb={5}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h4" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Box>
                        <SearchIcon fontSize="large" style={{ marginRight: "20px" }} />
                        <AddBoxIcon onClick={() => changeRoute()} fontSize="large" />
                    </Box>
                </Box>
            </Box>
    )
}
