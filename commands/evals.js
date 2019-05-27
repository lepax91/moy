const Discord = require("discord.js");
module.exports.run = async (bot, message, args, ops, ops2) => {
    if (message.author.id !== "417403958814965771" && message.author.id !== "273813194861051907") return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.");             
            
        let cleanembed = new Discord.RichEmbed()
            .setColor("#000FF")
            .setDescription(`📥Input\n\n${code}\n\n📤Output\n\n${clean(evaled)}`)
        message.channel.send(cleanembed);
    } catch (err) {
        let botembed = new Discord.RichEmbed()
            .setColor("#FF0000")
            .addField(`📥Input`, args.join(' '), true)
            .addField(`📤Output`, `\`ERROR\` \'\'\'x1\n${(err)}\n\`\'\``, true)
        message.channel.send(botembed);
    }
    
    function clean(text) {
        if (typeof (text) === "string")
            return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    }
}
module.exports.help = {
    name: "eval",
    aliases: []
}
