const Discord = require('discord.js')

exports.run = async (bot, message, args, color) => {

    let botping = new Date() - message.createdAt;
        
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTimestamp(new Date())
        .setFooter(`Ping: ${botping}ms`)
        message.channel.send(embed)
     

}
exports.help = {
    name: 'ping',
    aliases: []
}
