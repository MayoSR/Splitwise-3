const initialState = {
    oweOwed: {
        "SEPTEMBER": [
            {
                youPaid: false,
                name: "Johnathon",
                amtPaid: 50,
                for: "McDonalds",
                calcDiff: 20,
                date: "23 SEP"
            },
            {
                youPaid: false,
                name: "Kevin",
                amtPaid: 150,
                for: "McDonalds",
                calcDiff: 70,
                date: "21 SEP"
            },
            {
                youPaid: true,
                name: "Sadie",
                amtPaid: 120,
                for: "McDonalds",
                calcDiff: 60,
                date: "15 SEP"
            },
            {
                youPaid: true,
                name: "Maylene",
                amtPaid: 200,
                for: "McDonalds",
                calcDiff: 120,
                date: "12 SEP"
            }
        ],
        "AUGUST": [
            {
                youPaid: false,
                name: "Johnathon",
                amtPaid: 50,
                for: "McDonalds",
                calcDiff: 20,
                date: "23 AUG"
            },
            {
                youPaid: false,
                name: "Kevin",
                amtPaid: 150,
                for: "McDonalds",
                calcDiff: 70,
                date: "21 AUG"
            },
            {
                youPaid: true,
                name: "Sadie",
                amtPaid: 120,
                for: "McDonalds",
                calcDiff: 60,
                date: "15 AUG"
            },
            {
                youPaid: true,
                name: "Maylene",
                amtPaid: 200,
                for: "McDonalds",
                calcDiff: 120,
                date: "12 AUG"
            }
        ],
    },
    groups: {
        "EVENT_1" : {
            event: "Dinner",
            members: [
                'USER_1', 'USER_2', 'USER_3', 'USER_4', 'USER_5'
            ],
            totalSpent: 600,
            date:"1 AUG"
        },
        "EVENT_2" : {
            event: "Lunch",
            members: [
                'USER_1', 'USER_2',
            ],
            totalSpent: 200,
            date:"22 AUG"
        },
        "EVENT_3" : {
            event: "Trip",
            members: [
                'USER_1','USER_4', 'USER_5'
            ],
            totalSpent: 450,
            date:"11 AUG"
        },
        "EVENT_4" : {
            event: "Ice cream",
            members: [
                'USER_1','USER_5'
            ],
            totalSpent: 80,
            date:"10 AUG"
        },
        "EVENT_5" : {
            event: "Race",
            members: [
                'USER_1', 'USER_2', 'USER_3', 'USER_4', 
            ],
            totalSpent: 300,
            date:"6 AUG"
        },

    },
    users: {
        'USER_1': {
            events: {
                "EVENT_1": {
                    owed:110
                },
                "EVENT_2": {
                    owed:130
                },
                "EVENT_3": {
                    owed:100
                },
                "EVENT_4": {
                    owed:140
                },
                "EVENT_5": {
                    owed:120
                },
            }
        },
        'USER_2': {
            events: {
                "EVENT_1": {
                    owed:110
                },
                "EVENT_2": {
                    owed:130
                },
                "EVENT_3": {
                    owed:100
                },
                "EVENT_4": {
                    owed:140
                },
                "EVENT_5": {
                    owed:120
                },
            }
        },
        'USER_3': {
            events: {
                "EVENT_1": {
                    owed:110
                },
                "EVENT_2": {
                    owed:130
                },
                "EVENT_3": {
                    owed:100
                },
                "EVENT_4": {
                    owed:140
                },
                "EVENT_5": {
                    owed:120
                },
            }
        },
        'USER_4': {
            events: {
                "EVENT_1": {
                    owed:110
                },
                "EVENT_2": {
                    owed:130
                },
                "EVENT_3": {
                    owed:100
                },
                "EVENT_4": {
                    owed:140
                },
                "EVENT_5": {
                    owed:120
                },
            }
        },
        'USER_5': {
            events: {
                "EVENT_1": {
                    owed:110
                },
                "EVENT_2": {
                    owed:130
                },
                "EVENT_3": {
                    owed:100
                },
                "EVENT_4": {
                    owed:140
                },
                "EVENT_5": {
                    owed:120
                },
            }
        }
    },
    drawerState:false
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state
    }
}