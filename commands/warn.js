const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    var missingPermissionsEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Nesprávná pravomoc či jí vůbec nemáš?')
        .setDescription(':x: Chybí ti pravomoc **MANAGE_MESSAGES** nebo výše! Až budeš mít tuto pravomoc zkus to znovu.')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle('Nesprávné použití!')
        .setDescription('Použij to takhle: `.warn [@uživatel] [důvod]')
        .setTimestamp();
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed);
    let mentioned = message.mentions.users.first();
    if(!mentioned) return message.channel.send(missingArgsEmbed); 
    let reason = args.slice(1).join(' ') 
    if(!reason) return message.channe.send(missingArgsEmbed); 

    var warningEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`Byl jsi varován v ${message.guild.name}`)
        .addField('Varoval tě:', message.author.tag)
        .addField('Důvod', reason)
        .setTimestamp();
    mentioned.send(warningEmbed);
    var warnSuccessfulEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(':white_check_mark: **_Warn byl úspěšný, do DM byl dotyčnému posláno proč byl varován._**');
    message.channel.send(warnSuccessfulEmbed);
    message.delete();
}
exports.help = {
    name: "warn",
    aliases: []
}
