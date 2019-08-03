const randomnsfw = require('random-puppy');
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   	if (!message.channel.nsfw) {
    return message.channel.send(new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(":underage: Tento příkaz je povolen jen kde je označen NSFW kanál.")
    );
  }  
	         let nsfwreddits = [
        'NSFW_Snapchat',
               'snapchatgw'
   
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
            .setTitle("Snapchat")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Požadováno od: ${message.author.tag} | Verze: 2.5b")
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "snapchat",
    aliases: []
}
