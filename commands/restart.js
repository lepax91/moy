const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {

if (message.author.id !== "417403958814965771" && message.author.id !== "273813194861051907") return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.");             

let em = new Discord.RichEmbed()
.setDescription("**:wave: Dot se restartuje, bude to chvíli trvat..**)
.setTimestamp()
.setColor("RED")
let embed = new Discord.RichEmbed()
.setDescription(`**:white_check_mark: ${bot.user.username} byl úspěšně restartován!**`)
.setTimestamp()
.setColor("GREEN")

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.token))
    .catch(err => console.error(err))
    .then(() => message.channel.send({embed: embed}))
  }
  
  restart(message.channel)
}

module.exports.help = {
  name: "restart",
  aliases: []
}
