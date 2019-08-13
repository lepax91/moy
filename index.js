const Discord = require("discord.js");
const config = require("./config.json");

bot = new Discord.Client()
const db = require('quick.db')
const token = require("./token.json").token;

bot.on("ready", async () => {
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

bot.on("message", async message => {
    var mentionedmember = message.mentions.members.first() 
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = config.prefix;
    
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    let command;
    if (command) command.run(bot, message, args);

    // let cmd = bot.commands.get(command.slice(prefix.length));
    // if (cmd) cmd.run(bot, message, args);
  
bot.db = db;
bot.embed = new Discord.RichEmbed()
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.afk = new Map();

  if (message.isMentioned("539139339741954099")) {	
    const em = new discord.RichEmbed()	
    .setDescription(`Zdravím jsem Dot! Do jakýhokoliv kánalu zadej příkaz ``.help`` aby jsi mohl vidět všechny moje příkazy!`)	
    .setColor("GREEN")	
    .setTimestamp()	
    message.channel.send({embed: em})	
      }	
  });    
    
bot.login(process.env.token); 
