const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { 
		message.channel.send('Nemáš permisse.f');
		return
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('p,poll <otázka>);
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('Klikni na ❎ nebo ✅')
        .setDescription(args.join(' '))
        .setTitle(`Poll vytvořil: ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {            
            msg.react("❎");
            msg.react("✅"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
