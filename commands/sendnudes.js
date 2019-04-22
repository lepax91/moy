const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    const { body } = await get("http://api.oboobs.ru/boobs/0/1/random");

    const embed = new Discord.RichEmbed()
        .setColor(0xFBFBFB)
        .setImage(`http://media.oboobs.ru/${body[0].preview}`)

    message.author.send(embed);
    message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("🔞 **_Příkaz sendnudes byl úspěšně poslán do Private Message!_**")
}
exports.help = {
    name: "sendnudes",
    aliases: []
}
