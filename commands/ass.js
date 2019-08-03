const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {  
   if (!message.channel.nsfw) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(":underage: Tento příkaz je povolen jen kde je označen NSFW kanál.")
    );
  }
    const { body } = await get("https://nekobot.xyz/api/image?type=ass");
    const embed = new Discord.RichEmbed()
        .setTitle('Ass')
        .setURL(body.message)
        .setColor("RANDOM")
        .setImage(body.message)
        .setFooter(`Požadováno od: ${message.author.tag} | Verze: 2.5b`)
        .setTimestamp();
    message.channel.send(embed);
}
exports.help = {
    name: "ass",
    aliases: []
}
