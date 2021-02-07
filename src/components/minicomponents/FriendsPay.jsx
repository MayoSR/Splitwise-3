import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    },
    avatarSpace:{
        marginRight: "20px"
    },
    name:{
        fontWeight:"bold",
    },
    paidBy:{
        color:"#9b9999"
    },
    amount:{
        fontWeight:"bold"
    },
    friendsPayBox:{
        background: "white",
        padding:"15px",
        borderRadius:"15px"
    }
}))

export default function FriendsPay(props) {

    const classes = useStyles()

    return (
        <Box className={classes.friendsPayBox} display="flex" flexDirection="column">
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatarSpace} />
                    <Box flexDirection="column" style={{ textAlign: "left" }} justifyContent="center" alignItems="center">
                        <Typography variant="subtitle2" display="block" className={classes.name}>
                            {props.name}
                        </Typography>
                        {
                            props.paidBy !== undefined ? 
                                (<Typography variant="subtitle2" display="block" className={classes.paidBy}>
                                {props.paidBy}
                            </Typography>) : <></>
                        }
                    </Box>
                </Box>
                {
                    props.amount !== undefined ? 
                        (<Typography variant="subtitle1" display="block" className={classes.amount}>
                            + ${props.amount}
                        </Typography>) : <></>
                }
            </Box>
        </Box>
    )
}
