const Discord = require('discord.js');
const spammessage = "ok hand"
exports.run = async (client, message, args) => { // eslint-disabled-vars
  if (message.author.id !== "417403958814965771" && message.author.id !== "273813194861051907") return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.");             
  let Ping = message.mentions.users.first();
  setInterval(function(){
    Ping.send(spammessage) 
   },
     1200
};     
exports.help = {
    name: "spam",
    aliases: []
}
