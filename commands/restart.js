const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {

if (message.author.id != 417403958814965771) return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.")

let em = new Discord.RichEmbed()
.setTitle("🕒 Dot se restartuje!")
.setDescription("**:wave: Dot se restartuje, bude to chvíli trvat...**")
.setTimestamp()
.setColor("RED")
let embed = new Discord.RichEmbed()
.setTitle(":white_check_mark: Úspěšně Zresetováno!")
.setDescription(`**:thumbsup: ${bot.user.username} byl úspěšně Restartován..**`)
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
