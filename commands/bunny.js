const Discord = require("discord.js"),
const request = require("superagent");
    
module.exports.run = async (client, message, args) => {
    let { body } = await request.get('https://api-to.get-a.life/redpandaimg');
    let Discord = new Discord.RichEmbed()
    .setTitle('Red Panda 🐼')
    .setColor(0x7289da) 
    .setImage(body.link);
    message.channel.send(redpandaembed);
}
module.exports.help = {
    name: "rpanda",
    aliases: []
}
