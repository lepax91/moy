const udata = require('../database/mongoose/UserData')

module.exports.run = (bot, message, args) => {
  const randomcoins = Math.ceil(Math.random() * 250)
  
  udata.findOne({userId: message.author.id}, (err,data) => {
    if (!data) {
      const newD = new udata({
        userId: message.author.id,
        cash: randomcoins,
        isBL: false
      })
      newD.save()
      
      let em = new (require('discord.js').RichEmbed)()
      .setDescription(`Úspěsně si dokončil svojí práci a dostáváš nějakou částku! 💰`)
      .addField(`💸 Peněz jsi dostal`, `**$${randomcoins}$**`, true)
      .addField("💸 Balance:", `**$${randomcoins}$**`, true)
      .setColor("GREEN")
      message.channel.send(em)
    } else {
      data.cash = data.cash + randomcoins
      data.save()   
}

module.exports.help = {
  name: "work",
  aliases: []
}          
