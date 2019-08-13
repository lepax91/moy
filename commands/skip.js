const queue = require('./play.js').queue
const play = require('./play.js').play
const isPlaying = require('./play.js').isPlaying
var skipreqs = []
const embed = new (require('discord.js').RichEmbed)()

module.exports.run = (bot, message, args) => {
  const vc = message.guild.me.voiceChannel
  if (!vc) return message.channel.send(">>> :warning: Žádná hudba momentálně nehraje, pusť nějakou hudbu..")
  if (skipreqs.length < 3) {
    skipreqs.push(message.author.id)
  }
  
  if (!isPlaying) {
    embed
    .setDescription(":warning: Nemůžeš přeskočit to co nehraje.")
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send({embed: embed})
  }
  
  if (skipreqs >=3) {
    queue.shift()
    play(queue[0], message)
    embed
    .setDescription(":white_check_mark: Hudba je skipnuta, hraje momentálně další.")
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send({embed: embed})
  }
}

module.exports.help = {
 name: "skip",
 aliases: []
}
