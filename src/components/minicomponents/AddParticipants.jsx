import React from 'react'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux'

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
    posAmount:{
        fontWeight:"bold",
        color:"green"
    },
    negAmount:{
        fontWeight:"bold",
        color:"red"
    },
    friendsPayBox:{
        background: "white",
        padding:"15px",
        borderRadius:"15px"
    }
}))

export default function AddParticipants(props) {

    const classes = useStyles()
    const dispatch = useDispatch()

    const addParticipants = () =>{

    }

    const empty = () => {}

    return (
        <Box className={classes.friendsPayBox} display="flex" flexDirection="column" mb={2} onClick={props.changeRoute !== undefined ? () => props.changeRoute() : () => empty}>
            <Box display="flex" alignItems="flex-end" justifyContent="space-between">
                <Box display="flex" alignItems="center">
                    {
                        props.type === "iconBox" ? props.icon : <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.avatarSpace} />
                    }
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
                        (<Typography variant="subtitle1" display="block" className={props.isPos === true ? classes.posAmount :  classes.negAmount}>
                             {props.isPos === true ? "+" : "-"} ${props.amount}
                        </Typography>) : <></>
                }
            </Box>
        </Box>
    )
}
