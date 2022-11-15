const { Schema, model } = require('mongoose');

const PlayerSchema = new Schema ({
    id:{
        type: Number
    },
    first_name:{
        type: String
    },
    last_name:{
        type: String
    },
    height_feet:{
        type: Number
    },
    height_inches:{
        type: Number
    },
    last_name:{
        type: String
    },
    position:{
        type: String
    },
    team:{
        type: Object
    },
    weight:{
        type: String
    }
})
// not sure if i will need more?

const Players = model('Players', PlayerSchema);
module.exports = Players;