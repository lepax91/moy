const {bot} = require('../index');	
const config = require("../config.json");	

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
});
