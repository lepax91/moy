const Discord = require("discord.js");
const db = require('quick.db')
const token = require("./token.json").token;
const client = new Discord.Client();
  disableEveryone: true
require("./functions")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.embed = new Discord.RichEmbed()
client.db = db;




module.exports.bot = client;


client.login(process.env.token);
