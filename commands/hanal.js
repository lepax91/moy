const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
if (!message.channel.nsfw)
  var ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(':underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**')
  .setImage('https://cdn.discordapp.com/attachments/542778827051499564/554356353641086977/20190310_183407.png')
  return message.channel.send(ozelmesajuyari)  	
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
