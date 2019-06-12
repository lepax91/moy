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
        'FortnitePorn',
        'Fortnite34'
    
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
            .setTitle("Nechcete kyblík pane?")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Přestaň furt honit, je to hnUs| Verze: 2.0b")	
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "fortnite",
    aliases: []
} 
