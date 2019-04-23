const mongoose = require('mongoose')

const scheme = mongoose.Schema({
  userId: String,
  cash: { type: Number, default: 100 },
  isBL: { type: Boolean, default: false }
})

module.exports = mongoose.model("UserData", scheme)
