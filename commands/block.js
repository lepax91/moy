const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var blockedUsers = [];

let user = message.mentions.users.first();
if (user && !blockedUsers.includes(user.id)) blockedUsers.push(user.id);
if (blockedUsers.includes(message.author.id) || message.author.bot ||
}
module.exports.help = {
  name: "block",
  aliases: []
}
