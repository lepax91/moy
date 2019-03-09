const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
    const { body } = await get("https://nekobot.xyz/api/image?type=4k");

    const embed = new Discord.RichEmbed()
        .setTitle('4k')
        .setURL(body.message)
        .setColor(0x619232)
        .setImage(body.message)
        .setFooter(`Version: 1.2`)
        .setTimestamp()
    message.channel.send(embed);
}
exports.help = {
    name: "4k",
    aliases: []
}
