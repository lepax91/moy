const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
require("./functions")(bot);

bot.musicTask = require("./util/musicHandler")
bot.musicTasks = {}

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;


bot.login(process.env.token);
