const Discord = require('discord.js'),
const request = require('superagent');
module.exports.run = async (client, message, args) => {
     let { body } = await request.get(`https://api-to.get-a.life/birbimg`);
    let birdembed = new Discord.RichEmbed()
      .setTitle('Birdy 🐦')
    .setColor("#7289da")
    .setImage(body.link); 
    message.channel.send(birdembed);
}
module.exports.help = {
    name: "bird",
    aliases: []
}
