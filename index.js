const discord = require("discord.js");
const db = require('quick.db')
const token = require("./token.json").token;	
const bot = new discord.Client({	
  disableEveryone: true	 
});
require("./functions")(bot);	


client.db = db;
client.embed = new Discord.RichEmbed()
client.afk = new Map();


bot.commands = new discord.Collection();	
bot.aliases = new discord.Collection();	
bot.afk = new Map();	


module.exports.bot = bot;	


client.login(process.env.token); 
