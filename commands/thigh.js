const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
 if (!message.channel.nsfw) return message.channel.send(":underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**")
    const { body } = await get("https://nekobot.xyz/api/image?type=ass");

    const embed = new Discord.RichEmbed()
        .setTitle('Thigh')
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
        .setFooter(`Požadováno od: ${message.author.tag} | Verze: 1.5`)
        .setTimestamp()
    message.channel.send(embed);
}
exports.help = {
    name: "thigh",
    aliases: []
}
