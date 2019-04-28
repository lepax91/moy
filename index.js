const discord = require("discord.js");
const db = require('quick.db')
const token = require("./token.json").token;
const client = new discord.Client({
  disableEveryone: true
});
require("./functions")(bot);

client.db = db;
client.embed = new Discord.RichEmbed()
client.commands = new discord.Collection();
client.aliases = new discord.Collection();
client.afk = new Map();

module.exports.bot = bot;


client.login(process.env.token);
