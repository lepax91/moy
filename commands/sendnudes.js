const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    const { body } = await get("http://api.oboobs.ru/boobs/0/1/random");

    const embed = new Discord.RichEmbed()
        .setTitle("Boobs")
        .setColor(0xFBFBFB)
        .setImage(`http://media.oboobs.ru/${body[0].preview}`)

    message.author.send(embed);
}
exports.help = {
    name: "sendnudes",
    aliases: []
}
