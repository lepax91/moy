const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});
require("./functions")(bot);

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

module.exports.bot = bot;

if (cmd === "p,help") {
var embed = new Discord.RichEmbed()
    .addField("normální sfw příkazy", "meme");
    .addField("nějaký to nsfw 😏", "ass, pussy, hentai");
    message.channel.send(embed)
}


bot.login(process.env.token);
