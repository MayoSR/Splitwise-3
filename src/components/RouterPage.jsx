import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import OweOwed from './OweOwed';
import Navbar from './Navbar';
import Activity from './Activity';
import Groups from './Groups';
import AddGroup from './AddGroup';
import GroupPage from './GroupPage';
import AddEvent from './AddEvent';
import Friends from './Friends';
import Account from './Account';
import Spending from './Spending';
import Spent from './Spent';
import FriendProfile from './FriendProfile';
import EventDetails from './EventDetails';

export default function RouterPage() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <OweOwed />
                </Route>
                <Route exact path="/activity">
                    <Activity />
                </Route>
                <Route path="/groups">
                    <Groups />
                </Route>
                <Route exact path="/group/:group">
                    <GroupPage />
                </Route>
                <Route path="/newgroup">
                    <AddGroup />
                </Route>
                <Route path="/event">
                    <AddEvent />
                </Route>
                <Route path="/friends">
                    <Friends />
                </Route>
                <Route path="/account">
                    <Account />
                </Route>
                <Route path="/spending">
                    <Spending />
                </Route>
                <Route path="/spent">
                    <Spent />
                </Route>
                <Route path="/profile">
                    <FriendProfile />
                </Route>
                <Route path="/eventdetails">
                    <EventDetails />
                </Route>
            </Switch>
            <Navbar />
        </Router>

    )
}
