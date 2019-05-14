const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
    
    if (args[0] === 'help') {
        let embed = new Discord.RichEmbed()
        .setAuthor("Work help!")
        .setDescription("Work types: \nconstructor \nprogrammer \nprostitute")
        .setColor("GREEN")
        .setFooter("V0.4alpha")
        .setTimestamp();
        message.channel.send(embed)
        
        
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
