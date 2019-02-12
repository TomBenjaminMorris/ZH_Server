let mongoose = require('mongoose');

const server = 'localhost';
const database = 'bars';

mongoose.connect(`mongodb://${server}/${database}`);

let barsSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    startTime:{
        type: String,
        require: true
    },
    endTime:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Bar', barsSchema);