const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    const { body } = await get("https://nekobot.xyz/api/image?type=ass");

    const embed = new Discord.RichEmbed()
        .setTitle('Ass')
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
        .setFooter(`Požadováno od: ${message.author.tag} | Verze: 1.2`)
    message.channel.send(embed);
}
exports.help = {
    name: "ass",
    aliases: []
}
