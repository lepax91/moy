const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var blockedUsers = [];

if (blockedUsers.includes(message.author.id) || message.author.bot ||
let user = message.mentions.users.first();
if (user && !blockedUsers.includes(user.id)) blockedUsers.push(user.id);
  
}
module.exports.help = {
  name: "block",
  aliases: []
}
