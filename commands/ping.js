const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send(message.channel.id, 'Pong! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter(`Ping: ${diff}ms`)
        message.edit(embed);
      
    });

}
exports.help = {
    name: 'ping',
    aliases: []
}
