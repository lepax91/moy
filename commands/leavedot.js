var Discord = require('discord.js');

exports.run = (bot, message, args) => {
	
	const ownerIDs = ['417403958814965771, 273813194861051907']
    if (message.author.id !== ownerIDs) return message.channel.send(":x: **Tento příkaz může používat jen Developer Dota!**");

    var error17 = new Discord.RichEmbed()
        .setDescription(':x: **Nebylo zadáno ID nebo bylo špatně zadaný.**')
        .setColor('RANDOM')
    message.channel.send(error17)


    bot.guilds.get(args[0]).leave();
    message.channel.send(`**Dot se odpojil od serveru!** ID: [${args[0]}]`)
	
}
exports.help = {
	name: "leave",
	aliases: []
}
