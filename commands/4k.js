const Discord = require('discord.js');
const { get } = require('snekfetch');

const embed = client.embed
.setTimestamp()

exports.run = async (client, message) => {
    
    if (args[0] === 'help') {
        const embed = new Discord.RichEmbed()
        embed.setAuthor("Chceš-li pomoc, tak seš tu správně. ")
        embed.setDescription("Tento příkaz funguje pouze jen v NSFW\nPříkaz funguje normálně a napíšeš pouze **.4k**")
        embed.setColor("RANDOM")
        embed.setFooter("V1.5a")
        message.channel.send(embed);

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
    message.channel.send(embed);
}
exports.help = {
    name: "4k",
    aliases: []
}
