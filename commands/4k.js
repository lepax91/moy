const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {

    if (!message.channel.nsfw) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(":underage: Tento příkaz je povolen jen kde je označen NSFW kanál.")
    );
  }  
    const { body } = await get("https://nekobot.xyz/api/image?type=4k");
    const embed = new Discord.RichEmbed()
        .setTitle('4k')
        .setURL(body.message)
        .setColor(0x619232)
        .setImage(body.message)
        .setFooter("Požadováno od: ${message.author.tag} | Verze: 2.5b")	
        .setTimestamp();
    message.channel.send(embed);
}
exports.help = {
    name: "4k",
    aliases: []
}
