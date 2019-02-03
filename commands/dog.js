const Discord = require('discord.js')
const sa = require('superagent')
exports.run = async (client, message, args) => {
    var {body} = await sa.get(`https://random.dog/woof.json`)
    var dog = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setImage(body.url)
    message.channel.send(dog)
}
exports.help = {
    name: 'dog',
    aliases: []
}
