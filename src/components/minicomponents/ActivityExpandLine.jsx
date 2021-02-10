import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    }
}))

export default function ActivityExpandLine(props) {

    const classes = useStyles()
    const history = useHistory();

    const activityFullScreen = () => {
        history.push("/activity");
    }

    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="body1" gutterBottom style={{fontWeight:"bold"}}>
                {props.leftText}
            </Typography>
            <Box display="flex" alignItems="center">
                {
                    (props.seeAllText !== undefined) ? (
                        <>
                            <Typography variant="subtitle1" onClick={() => activityFullScreen()} style={{fontWeight:"bold"}}>
                                {props.seeAllText}
                            </Typography>
                            <ChevronRightIcon />
                        </>) :
                        <></>
                }
            </Box>
        </Box>
    )
}
