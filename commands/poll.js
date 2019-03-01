const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {
 
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("**:x: | Nemáš žádné permisse...**");									
  if(!args[0] || args[0 == "help"]) return message.reply("❓ Například: .poll <otázku>")
	
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM") //To change color do .setcolor("#fffff")
        .setFooter(`Kdo vytvořil poll?: ${message.author.username}`)		
        .setDescription(args.join(' '))
        .setTitle('Poll');
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {            
            msg.react("👍");
            msg.react("👎"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};
module.exports.help = {
    name: 'poll',
    aliases: ['pl']
}
