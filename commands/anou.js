const Discord = require('discord.js');

exports.run = async (client, message) => {
		   const color = args[0]
		   const text = args.slice(1).join(" ");
       if (message.author.id != 417403958814965771) return message.reply("Tento příkaz můžou používat pouze jen ty co jsou v Dot Development Project.")
		   if (text.length < 1) return message.channel.send("kámo ty seš dobrej kokot");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("0x" + color)
		   .setTitle("Important Announcement:")
		   .setDescription(text);		
		   message.channel.send({embed})
}
exports.help = {
    name: "text",
    aliases: []
}
