
const Discord = require('discord.js'),
    superagent = require('superagent');
module.exports.run = async (client, message, args) => {
    let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
        .setTitle('Aww... Kitty!')
        .setColor("RANDOM")
        .setImage(body.file)
    message.channel.send(catembed);
}
module.exports.help = {
    name: "cat",
    aliases: []
}
