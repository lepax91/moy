const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {
  if(!args[0]) return message.channel.send('Chyba! `.reverse <slovo který se hodí zvráceně>`');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Tys to rozbil tpč..`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Slovo: ', '```' + `${args.join(' ')}` + '```')
  .addField('Zvrácení: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
exports.help = {
    name: "reverse",
    aliases: []
} 
