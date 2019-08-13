const Discord = require("discord.js");
const {bot} = require('./index');
const config = require("./config.json");

const db = require('quick.db')
const token = require("./token.json").token;
const client = new Discord.Client({
  disableEveryone: true
});
require("./functions")(client);

client.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
    if (config.activity.streaming == true) {
        bot.user.setActivity(config.activity.game, {
            url: 'https://twitch.tv/username'
        });
    } else {
        bot.user.setActivity(config.activity.game, {
            type: 'PLAYING'
        }); //PLAYING, LISTENING, WATCHI
    }
});

client.on("message", message => {
  var mentionedmember = message.mentions.members.first()
  
client.db = db;
client.embed = new Discord.RichEmbed()
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.afk = new Map();

module.exports.bot = client;

  if (message.isMentioned("539139339741954099")) {
    const em = new discord.RichEmbed()
    .setDescription(`Zdravím jsem Dot! Do jakýhokoliv kánalu zadej příkaz ``.help`` aby jsi mohl vidět všechny moje příkazy!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send({embed: em})
  }
   });
client.login(process.env.token); 
