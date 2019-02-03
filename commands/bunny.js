const Discord = require('discord.js')
const sa = require('superagent')
exports.run = (client, message, args) => {
    var result = Math.floor(Math.random() * 162)
    var bunny = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(`https://bunnies.media/poster/${result}.png`)
    message.channel.send(bunny)
}
exports.help = {
    name: 'bunny',
    aliases: []
}
