const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
  if (!message.channel.nsfw) return message.channel.send(":underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**")	
    const { body } = await get("https://nekobot.xyz/api/image?type=4k");

    const embed = new Discord.RichEmbed()
        .setTitle('4k')
        .setURL(body.message)
        .setColor(0x619232)
        .setImage(body.message)
    message.channel.send(embed);
}
exports.help = {
    name: "4k",
    aliases: []
}
