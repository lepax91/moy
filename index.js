const Discord = require("discord.js");
const config = require("./config.json");

const db = require('quick.db')
const token = require("./token.json").token;
const bot = new Discord.Client({
  disableEveryone: true
});
require("./functions")(bot);


bot.db = db;
bot.embed = new Discord.RichEmbed()
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();

    
bot.login(process.env.token); 

 
