import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom";
import FriendsPay from './minicomponents/FriendsPay';
import Datebox from './minicomponents/Datebox';
import ActivityExpandLine from './minicomponents/ActivityExpandLine';
import BackDropContent from './minicomponents/BackDropContent';
import {useSelector,useDispatch} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        background: "#1E1F21",
    },
    backDrop: {
        height: "35vh"
    },
    foreDrop: {
        borderTopLeftRadius: "25px",
        borderTopRightRadius: "25px",
        height: "65vh",
        background: "#f5f5f5",
        padding: "20px 40px"
    },
}));


export default function OweOwed() {

    const classes = useStyles()
    const monthWiseData = useSelector(state => state.oweOwed)
    const history = useHistory();
    const state = useSelector(state => state.accountDetails);
    const dispatch = useDispatch();


    return (
        <div className={classes.root}>
            <div className={classes.backDrop}>
                <BackDropContent topText="My Balance" bottomText={state.balance} />
            </div>
            <div className={classes.foreDrop}>
                <ActivityExpandLine leftText="Activity" seeAllText="See All" />
                <Datebox date="21 Jul,2021" />
                {
                    state.recentTransactions.map((ele) => {
                        return <FriendsPay name={ele.name} paidBy={ele.status} amount={ele.amount} isPos={ele.paidYou} />
                    })
                }
            </div>
        </div>
    )
}
