const Discord = require("discord.js");
const db = require('quick.db')
const token = require("./token.json").token;
let args = messageArray.slice(1);	
const client = new Discord.Client({
  disableEveryone: true
});
require("./functions")(client);

client.db = db;
client.embed = new Discord.RichEmbed()
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.afk = new Map();

module.exports.bot = client;


client.login(process.env.token); 
