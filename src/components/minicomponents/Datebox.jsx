import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    }
}))

export default function Datebox(props) {

    const classes = useStyles()

    return (
        <Box mt={2} mb={3}>
            <Typography variant="body2" display="block" className={classes.monthData} align="left">
                {props.date}
            </Typography>
        </Box>
    )
}
