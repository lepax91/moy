const Discord = require('discord.js'),
    superagent = require('superagent');
module.exports.run = async (client, message, args) => {
    let {
        body
    } = await superagent
        .get(`https://random-d.uk/api/v1/random`);
    const catembed = new Discord.RichEmbed()
        .setTitle('Aww... Ducky!')
        .setColor("RANDOM")
        .setImage(body.file)
    message.channel.send(catembed);
}
module.exports.help = {
    name: "duck",
    aliases: []
}
