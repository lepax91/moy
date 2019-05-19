module.exports.run = (bot, message, args, discord) => {
let em = new discord.RichEmbed()
.setTitle(`${bot.user.username} Restartuji se...`)
.setDescription(":wave: Restartuji se, Bude to chvíli trvat...")
.setTimestamp()
.setColor("RED")
let embed = new discord.RichEmbed()
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
