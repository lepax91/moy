const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry Na toto nemáš pravomoc, promiň. ').catch(console.error);
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: `Promiň, ale tu je nějaká chyba v pravomocí.. Kontaktuj Dot Development Project..");
            if (isNaN(args[1])) return message.channel.send(':warning: `Prosím, toto je jakási chyba..zadej číslo 1-100...');
            if (args[1] > 100) return message.channel.send(':warning: Maximální smazání zpráv 100..');
            message.channel.bulkDelete(args[1]);
            var cleanEmbed = new Discord.RichEmbed()            
            .setDescription(`Smazáno **${args[1]}** zpráv :white_check_mark:!`)
            .setFooter('Požadováno: ' + message.author.tag, message.author.avatarURL)
            .setTimestamp()
            .setColor('#ffffff');
            message.channel.send(cleanEmbed);
}
module.exports.help = {
    name: "purge69",
    aliases: []
}
