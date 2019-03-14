const superagent = require("superagent");
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw) return message.channel.send(":underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**") 	
	superagent.get('https://nekos.life/api/v2/img/trap')
            .end((err, response) => {
           var theirembed = new Discord.RichEmbed()
            .setTitle("Traps")
            .setColor("RANDOM")
            .setImage(response.body.url)
            .setFooter("Požadováno od: ${message.author.tag} | Verze: 1.5")
	    .setTimestamp();
      message.channel.send(theirembed);
  });
}
module.exports.help = {
    name: "traps",
    aliases: []
}
