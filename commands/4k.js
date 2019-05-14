const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
    if (!message.channel.nsfw) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(":underage: Tento příkaz je povolen jen kde je označen NSFW kanál.")
    );
  }  
    if(args[1] == 'help') {
            const embed = new Discord.MessageEmbed()
                .setTitle(`⁉ Pomoc pro \`4k\``)
                .setDescription("Dot pošle NSFW fotografii z kategorie **:underage: NSFW**")
                .addField("📘 Syntax", "`.4k`")
                .addField("⚠️ Dot neposílá NSFW fotografie?", "Musíte zapnout v rolích `Attach Files` a `Embed Files`)                  
                .setColor('#3498db')
                .setFooter(`Požadováno od ${message.author.username}`, message.author.displayAvatarURL())
            return message.channel.send(embed);   
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
