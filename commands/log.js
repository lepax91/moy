const Botconfig = require("../botconfig.json");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let aUser = message.author.username
   let reason = message.content.split(' ').slice(1);
   let reason1 = reason.join(" ");
   if(!reason) return message.reply("**:x: | Where is update?**");
   let staff = message.member.roles.find("name", "⛔ | Development of Dot");
   if(!staff) return message.reply("**:x: | None permissions with this Action!**");
   
   var embed = new Discord.RichEmbed()
   .setAuthor("Nový update do Dota!", message.author.avatarURL)
   .setDescription( reason1 )
   .setColor("RANDOM")
   .addField("Development:", aUser);
   //let Achannel = 
   let Achannel = message.guild.channels.find(`name`, "updates");
   Achannel.send(embed)
}

module.exports.help = {
    name: "log",
    aliases: []
}
