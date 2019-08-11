var Discord = require('discord.js');

exports.run = (bot, message, args) => {

	
   if (message.author.id !== "417403958814965771" && message.author.id !== "273813194861051907") return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.");             	
		
    var error17 = new Discord.RichEmbed()
        .setDescription(':x: **Nebylo zadáno ID nebo bylo špatně zadaný.**')
        .setColor('RANDOM')
    message.channel.send(error17)


    bot.guilds.get(args[0]).leave();
    message.channel.send(`:wave: **Dot úspěšně odpojil od serveru!** ID [${args[0]}]`)
	
}
exports.help = {
	name: "leave",
	aliases: []
}
