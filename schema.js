const { default: mongoose } = require("mongoose");

const restaurant = new mongoose.Schema()[
    Name[
        type= String,
        require=true
    ],
    Location[
        type=String,
        require=true
    ],
    menuItems[
        type=[MenuItems]
    ]
]

const MenuItems = new mongoose.Schema()[
    dishName[
        type = String,
        require=true
    ],
    cost[
        type=Number
    ]
]

module.mongoose = model.Schema("Menu",restaurant )
