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

    // let cmd = bot.commands.get(command.slice(prefix.length));
    // if (cmd) cmd.run(bot, message, args);
    
    
    if (message.content.includes(message.mentions.users.first())) {
        let mentioned = bot.afk.get(message.mentions.users.first().id);
        if (mentioned) message.channel.send(`**${mentioned.usertag}** je teď AFK Důvod: ${mentioned.reason}`);
    }
    let afkcheck = bot.afk.get(message.author.id);
    if (afkcheck) return [bot.afk.delete(message.author.id), message.reply(`Jsi pryč z AFK seznamu!`).then(msg => msg.delete(5000))];

    if (!message.content.startsWith(prefix)) return;

    if (bot.commands.has(cmd)) {
        command = bot.commands.get(cmd);
    } else {
        command = bot.commands.get(bot.aliases.get(cmd));
    }

    if (command) command.run(bot, message, args);
  
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
