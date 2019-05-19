const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {

if (message.author.id != 417403958814965771) return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.")

let em = new Discord.RichEmbed()
.setTitle(`${bot.user.username} Restartuji se...`)
.setDescription(":wave: Restartuji se, Bude to chvíli trvat...")
.setTimestamp()
.setColor("RED")
let embed = new Discord.RichEmbed()
.setTitle(`${bot.user.username} se právě restartoval.`)
.setDescription(`:thumbsup: ${bot.user.username} Úspěšně Restartován..`)
.setThumbnail(bot.user.avatarURL)
.setTimestamp()
.setColor("GREEN")

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.botToken))
    .catch(err => console.error(err))
    .then(() => message.channel.send({embed: embed}))
  }
  
  restart(message.channel)
}

module.exports.help = {
  name: "restart",
  aliases: []
}
