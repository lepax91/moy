const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    if (!message.channel.nsfw) return message.channel.send(":underage: | Hey my dude! This is not NSFW channel.");
    const { body } = await get("https://nekobot.xyz/api/image?type=pussy");

    const embed = new Discord.RichEmbed()
        .setTitle('Pussy')
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
        .setFooter(`Version: 1.2`)
        .setTimestamp()
    message.channel.send(embed);
}
exports.help = {
    name: "pussy",
    aliases: []
}
