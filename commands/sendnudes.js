const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    const { body } = await get("http://api.oboobs.ru/boobs/0/1/random");

    const embed = new Discord.RichEmbed()
        .setTitle('Boobs')
        .setURL(`http://media.oboobs.ru/${body[0].preview}`)
        .setColor(0x619232)
        .setImage(`http://media.oboobs.ru/${body[0].preview}`)
        .setFooter(`Requested by: ${message.author.tag} | Version: 1.2`)

    message.author.send(embed);
}
exports.help = {
    name: "sendnudes",
    aliases: []
}
