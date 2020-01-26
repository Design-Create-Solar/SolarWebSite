const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    name: String,
    team: String,
    email: String,
    position: String,
    bio: String,
    image: String
})

const Member = mongoose.model("member", memberSchema)

module.exports = Member