const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
    id: {
        type: Number
    },
    abbreviation: {
        type: String
    },
    city: {
        type: String
    },
    conference: {
        type: String
    },
    division: {
        type: String
    },
    full_name: {
        type: String
    },
    name: {
        type: String
    },
    win_loss_pct: {
        type: Number
    },
    home_win_pct: {
        type: Number
    },
    away_win_pct: {
        type: Number
    },
    players: {
        type: Array
    }
})
//i think this looks good? may need players value

const Teams = model('Teams', TeamSchema);


module.exports = Teams;