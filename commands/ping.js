const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let diff = (Date.now()); 
        
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter(`Ping: ${diff}ms`)
        message.send(embed)
     

}
exports.help = {
    name: 'ping',
    aliases: []
}
