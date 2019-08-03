var Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: **Na tento příkaz musíš mít práva!**");
  if(!args[0]) return message.channel.send(":warning: Zadej číslo `1-100`, takhle to jinak nepůjde.");
  message.channel.bulkDelete(args[0]).then(() => {
  var cleanEmbed = new Discord.RichEmbed()            
            .setDescription(`**:white_check_mark: Smazal jsem ${args[0]} zpráv(u)!**`)
            .setFooter('Požadováno: ' + message.author.tag, message.author.avatarURL)
            .setTimestamp()
            .setColor('#ffffff');
            message.channel.send(cleanEmbed);
});

}
module.exports.help = {
  name: "clear",
  aliases: []
}
