const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {
 
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("**:x: | U don't have any permissions 🤦..**");	
  if(!args[0] || args[0 == "help"]) return message.reply("❓ Example: .poll <question>")
	
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM") //To change color do .setcolor("#fffff")
        .setFooter(`${message.author.username} create poll!)		
        .setDescription(args.join(' '))
        .setTitle('**Poll Message!**);
        
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
