const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
    const { body } = await get("https://nekobot.xyz/api/image?type=hentai");

    const embed = new Discord.RichEmbed()
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
    message.author.send(embed);
      const embed1 = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription("🔞 **_Příkaz sendhentai byl úspěšně poslán do Private Message!_**")
      message.channel.send(embed1);                     
}
exports.help = {
    name: "sendhentai",
    aliases: []
}
