const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
    const { body } = await get("https://nekobot.xyz/api/image?type=hentai");

    const embed = new Discord.RichEmbed()
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
    message.author.send(embed);
    message.channel.send("🔞 **_Příkaz sendhentai byl úspěšně poslán do Private Message!_**")
}
exports.help = {
    name: "ass",
    aliases: []
}
