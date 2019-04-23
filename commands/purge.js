var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  var cleanEmbed = new Discord.RichEmbed()            
            .setDescription(`Smazáno **${args[0]}** zpráv :white_check_mark:!`)
            .setFooter('Požadováno: ' + message.author.tag, message.author.avatarURL)
            .setTimestamp()
            .setColor('#ffffff');
            message.channel.send(cleanEmbed);
});

}
module.exports.help = {
  name: "clear",
  aliases: 
}
