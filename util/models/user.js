const mongoose = require('mongoose')

const schema = mongoose.Schema({
  userId: String,
  coins: { type: Number, default: 0 },
  blacklisted: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false }
})

module.exports = mongoose.model("User", schema)
