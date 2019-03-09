const Discord = require("discord.js");

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    var suggestion = message.content.split(' ').slice(2).join(" ")
		
    if(!suggestion) {
       return message.channel.send("**<:tickNo:454716382869716992> | Pošlete nějaký návrh, který by se hodil!**");
    }
    const memberssg = message.author
    const memberzsszzsssz = message.mentions.members.first();
    if(!memberssg) {``
         return message.channel.send("<:tickNo:454716382869716992> **| Tento uživatel je neplatný.**");
   }
    message.reply(`<:tickYes:454716382886494208> **| Váš návrh byl úspěšný.**`);
    message.delete()
    var suggestionembed = new Discord.RichEmbed()
    .setColor("RANDOM") 
    .setTitle("<:tickYes:454716382886494208> | Suggestion")
    .addField(" **Uživatel:**", `${message.author.username}`) 
    .addField(" **Návrh:** ", `${suggestion}`)
    message.guild.channels.find("name", "suggestions").send({ embed: suggestionembed })
}
// ADD DESCRIPTION AND SUCH
module.exports.help = {
    name: "suggest",
    aliases: []
}
