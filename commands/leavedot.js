var Discord = require('discord.js');

exports.run = (bot, message, args) => {
	
	const ownerID = '417403958814965771';
    if (message.author.id !== ownerID) return message.channel.send("Toto můžou používat pouze jen ti kteří jsou v **Dot Development**");

    var error17 = new Discord.RichEmbed()
        .setDescription('**Prosím zadej správný ID.**')
        .setColor('RANDOM')
    message.channel.send(error17)

    var error18 = new Discord.RichEmbed()
        .setTitle('**Nemohu se od tohoto serveru odpojit!')
        .setColor("RANDOM")
    message.channel.send(error18)


    bot.guilds.get(args[0]).leave();
    message.channel.send(`**Dot se odpojil od serveru!** ID: [${args[0]}]`)
	
}
exports.help = {
	name: "leave",
	aliases: []
}
