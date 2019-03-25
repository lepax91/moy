let Discord = require('discord.js');

exports.run = (bot, message, args) => {
	
	const ownerID = '417403958814965771';
    if (message.author.id !== ownerID) return message.channel.send("Toto můžou používat pouze jen ti kteří jsou v **Dot Development**");

    var error17 = new Discord.RichEmbed().setColor('RANDOM')
        .setDescription('**Prosím zadej správný ID.**')
        .setColor('RANDOM')

    var error18 = new Discord.RichEmbed()
        .setTitle('**Nemohu se od tohoto serveru odpojit!')
        .setColor("RANDOM")


    bot.guilds.get(args[0]).leave();
    var error19 = w Discord.RichEmbed()
        .setTitle(`Právě jsem se odpojil z tohoto serveru!`)
        .setColor("RANDOM")
	
}
module.exports.help = {
	name: "leave",
	aliases: []
