const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
  if (!message.channel.nsfw)
  var ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setDescription(':underage: **_Tento příkaz je povolen jen v NSFW kanálu, prosím přesun se na jiný kanál!_**')		
  return message.channel.send(ozelmesajuyari)  
    const { body } = await get("https://nekobot.xyz/api/image?type=4k");

    const embed = new Discord.RichEmbed()
        .setTitle('4k')
        .setURL(body.message)
        .setColor(0x619232)
        .setImage(body.message)
        .setFooter(`Version: 1.2`)
        .setTimestamp()
    message.channel.send(embed);
}
exports.help = {
    name: "4k",
    aliases: []
}
