const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
if (!message.channel.nsfw) return message.channel.send(":underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**")
  
    const { body } = await get("https://nekobot.xyz/api/image?type=hentai_anal");

    var embed = new Discord.RichEmbed()
        .setTitle('Hentai Anal')
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
        .setFooter(`Version: 1.2`)
        .setTimestamp()
    message.channel.send(embed);
}
exports.help = {
    name: "hanal",
    aliases: []
}
