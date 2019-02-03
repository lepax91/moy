const Discord = require('discord.js')
const sa = require('superagent')
exports.run = async (client, message, args) => {
    var {body} = await sa.get(`http://aws.random.cat//meow`)
    var cat = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(body.file)
    message.channel.send(cat)
}
exports.help = {
    name: 'cat',
    aliases: []
}
