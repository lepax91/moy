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
      .setTitle("Pracuješ pouze 24 hodin, potom musíš přispívat na dluhy.")
      .setDescription(`Právě jsi dokončil práci!`)
      .addField(`Vydělal jsi:`, `$${randomcoins}.00`, true)
      .addField("Zůstatek:", `$${randomcoins}.00`, true)
      .setTimestamp()
      .setFooter("Dot - Beta v2.5")
      .setColor("GREEN")
      message.channel.send({embed: em})
    } else {
      data.cash = data.cash + randomcoins
      data.save()
      
      let em = new (require('discord.js').RichEmbed)()
      .setTitle("Pracuješ pouze 24 hodin, potom musíš přispívat na dluhy.")
      .setDescription(`Právě jsi dokončil svojí práci!`)
      .addField(`Vydělal jsi:`, `$${randomcoins}.00`, true)
      .addField("Zůstatek:", `$${data.cash}.00`, true)
      .setTimestamp()
      .setFooter("Dot - Beta v2.5")
      .setColor("GREEN")
      message.channel.send({embed: em})
    }
  })
}

module.exports.help = {
    name: "workbeta",
    aliases: []
}
