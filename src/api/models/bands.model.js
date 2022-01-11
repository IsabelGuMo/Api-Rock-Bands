const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bandsSchema = new Schema({
    name: {
        type: 'string',
    },
    description: {
        type: 'string'
    },
    origin: {
        type: 'string'
    },
    yearsActive: {
        type: 'string'
    }
}, {
    collection: 'bands'
});

//Exportamos el schema
module.exports = mongoose.model('Band', bandsSchema);