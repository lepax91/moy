const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    if (!message.channel.nsfw) return message.channel.send(":underage: **Tento příkaz je povolen jen v NSFW kanálu, prosím přesun se na jiný kanál!**");
    const { body } = await get("https://nekobot.xyz/api/image?type=hentai");

    const embed = new Discord.RichEmbed()
        .setTitle('Hentai')
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
        .setFooter(`Dot Version: 1.2`)
        .setTimestamp()
    message.channel.send(embed);
}
exports.help = {
    name: "hentai",
    aliases: []
}
