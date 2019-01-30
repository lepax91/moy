 const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {


      const pollMessage = args.join(" ");
      const pollNoEmbed = new Discord.RichEmbed()
        .addField(`${message.author.username}`, "Použij pouze takhle: p,poll <text>")
        .setColor("#ff0000");
      if (pollMessage.length <= 0) return message.channel.send(pollNoEmbed);
      const pollEmbed = new Discord.RichEmbed()
        .addField(`<:Blue:508989275736375299> ${message.author.username}`, `${pollMessage}`)
        .setColor(`#0055ff`);
      message.delete();
      message.channel.send(pollEmbed)
        .then(function(message) {
          message;
          setTimeout(() => {
            message.react("👎");
          }, 100);
          message.react("👍");
        });
    }}});
    
module.exports.help = {
    name: 'poll',
    aliases: []
};
