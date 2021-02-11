const {Schema, model} = require ('mongoose')

const  schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    text: {type: String, required: true},
    created: {type: Date, default: Date.now, required: true},
    modified: {type: Date, default: Date.now, required: true}
})

module.exports = model('Message', schema)