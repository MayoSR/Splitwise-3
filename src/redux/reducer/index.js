import MuseumIcon from '@material-ui/icons/Museum';
import ConfirmationNumberOutlinedIcon from '@material-ui/icons/ConfirmationNumberOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalDiningOutlinedIcon from '@material-ui/icons/LocalDiningOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import FlightOutlinedIcon from '@material-ui/icons/FlightOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';

const initialState = {
    accountDetails:{
        balance:"$650",
        totalSpending:450.53,
        totalReceivable:1243.56,
        recentTransactions:[
            {
                name:"Sarah",
                status:"paid you",
                amount:160,
                paidYou:true,
            },
            {
                name:"Jerry",
                status:"was paid",
                amount:240,
                paidYou:false,
            },
            {
                name:"Joe",
                status:"paid you",
                amount:460,
                paidYou:true,
            },
        ]
    },
    groups:[
        {
            groupID:"GROUP_1",
            groupName:"Paris Summer Vacation",
            isBookmarked:true,
            noOfFriends:4,
            noOfExpenses:4,
            totalSpending:564.34,
            dateCreated:new Date(2021,8,24),
        },
        {
            groupID:"GROUP_2",
            groupName:"Avengers Endgame",
            isBookmarked:false,
            noOfFriends:3,
            noOfExpenses:5,
            totalSpending:164.34,
            dateCreated:new Date(2021,8,26),
        },
    ],
    groupData:[
        {
            groupID:"GROUP_1",
            groupName:"Paris Summer Vacation",
            totalSpending:564.34,
            totalReceivable:123.64,
            dateCreated:"26 Jul,2020",
            events:[
                {
                    eventID:"EVENT_1",
                    eventName:"Louvre Museum",
                    eventDate:new Date(2021,8,24),
                    eventIcon:<MuseumIcon  fontSize="large" style={{marginRight: "20px"}} />,
                    totalSpending:660,
                    category:"Entertainment"
                }
            ],
            participants:[
                {
                    name:"Sarah",
                    status:"owes",
                    amount:160,
                },
                {
                    name:"Sam",
                    status:"owed",
                    amount:280,
                },
                {
                    name:"Jane",
                    status:"owes",
                    amount:220,
                },
            ]
        },
        {
            groupID:"GROUP_2",
            groupName:"Avengers Endgame",
            totalSpending:132.44,
            totalReceivable:26.37,
            dateCreated:"28 Jul,2020",
            events:[
                {
                    eventID:"EVENT_4",
                    eventName:"Tickets",
                    eventDate:new Date(2021,8,24),
                    eventIcon:<ConfirmationNumberOutlinedIcon  fontSize="large" style={{marginRight: "20px"}} />,
                    totalSpending:60.24,
                    category:"Entertainment"
                },
                {
                    eventID:"EVENT_1",
                    eventName:"Nachos",
                    eventDate:new Date(2021,8,24),
                    eventIcon:<LocalDiningOutlinedIcon  fontSize="large" style={{marginRight: "20px"}} />,
                    totalSpending:25.65,
                    category:"Food"
                },
                {
                    eventID:"EVENT_2",
                    eventName:"Popcorn",
                    eventDate:new Date(2021,8,24),
                    eventIcon:<LocalDiningOutlinedIcon  fontSize="large" style={{marginRight: "20px"}} />,
                    totalSpending:35.64,
                    category:"Food"
                },
                {
                    eventID:"EVENT_3",
                    eventName:"Coke",
                    eventDate:new Date(2021,8,24),
                    eventIcon:<LocalDiningOutlinedIcon  fontSize="large" style={{marginRight: "20px"}} />,
                    totalSpending:10.43,
                    category:"Food"
                },
            ],
            participants:[
                {
                    name:"George",
                    status:"owes",
                    amount:32.62,
                },
                {
                    name:"Sebastian",
                    status:"owed",
                    amount:28.31,
                },
                {
                    name:"Peter",
                    status:"owes",
                    amount:70.54,
                },
            ]
        }
    ],
    categoricalData:{
        "entertainment":{
            totalSpending:"762.43"
        },
        "shopping":{
            totalSpending:"234.54"
        },
        "food":{
            totalSpending:"214.52"
        },
        "unknown":{
            totalSpending:"975.45"
        },
        "transport":{
            totalSpending:"642.12"
        },
        "other":{
            totalSpending:"241.56"
        },
    },
    
}

function newGroup(gname){
    let groupID = "GROUP_"+parseInt(Math.random()*100)
    let newDate = new Date(2021,8,26)
    return {
        groupInfo:{
            groupID:groupID,
            groupName:gname,
            isBookmarked:false,
            noOfFriends:0,
            noOfExpenses:0,
            totalSpending:0,
            dateCreated:newDate,
        },
        groupDataInfo:newGroupData(groupID,gname,newDate)
    }
    
}

function newGroupData(groupID,gname,createdDate){
    return {
            groupID:groupID,
            groupName:gname,
            totalSpending:0,
            totalReceivable:0,
            dateCreated:createdDate,
            events:[

            ],
            participants:[

            ]
        }
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case("BOOKMARK_GROUP"):
            state = {...state,groups:state.groups.map(ele => ele.groupID === action.id ? {...ele,isBookmarked:true} : {...ele})}
            return state
        case("REMOVE_BOOKMARK_GROUP"):
            state = {...state,groups:state.groups.map(ele => ele.groupID === action.id ? {...ele,isBookmarked:false} : {...ele})}
            return state
        case("CREATE_GROUP"):
            let groupMetaData = newGroup(action.groupName)

            state = {...state,groups:[...state.groups,groupMetaData["groupInfo"]]}
            state = {...state,groupData:[...state.groupData,groupMetaData["groupDataInfo"]]}
            console.log(state)
            return state
        default:
            return state
    }
}