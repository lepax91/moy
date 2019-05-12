const Discord = require("discord.js");
 
exports.run = async (bot, message, args, tools) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('You require a role with the permsissions \`Administrator\`').then(() => {
        message.react(`⛔`);
    });
    let channel;
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max:10});
    const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max:10});
    message.channel.send(`Giveaway setup started!\nWhat channel do you want the giveaway to take place in?(Mention the channel)\nNote giveaways last 1 day by default(Custom time functionality to be added in the future!)`);
    collector.on(`collect`, col => {
        if(!col.mentions.channels.first())return message.channel.send(`Please mention the giveaway channel!`);
        channel = col.mentions.channels.first();
        message.channel.send(`**Giveaway channel set to:**\n > <#${channel.id}>`);
        message.channel.send(`What are you giving away?`);
        const startColStop = () => {
            setTimeout(endCol, 2000);
        }
        const endCol = () => {
            collector.stop();
        }
        col.delete();
        startColStop()
    }),
    collector.on('end', () => {
        collector2.on("collect", async col2 => {
            collector2.stop();
            let givingAway = col2.content
            if(givingAway === channel)return;
 
            message.channel.send(`**You are giving away:**\n > ${givingAway}`);
 
            let desc = `**What can you win?:**\n\n${givingAway}\n\n\n\n`
            desc += `React with :tada: to enter!`
 
            let embed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTitle(`Giveaway! by ${message.author.username}`)
            .setDescription(desc)
            let em = await channel.send(embed)
            em.react(`🎉`)
                     
            const filter = (reaction, user) => reaction.emoji.name === '🎉'
            const rCol = em.createReactionCollector(filter, { time: 5000});
 
            rCol.on(`collect`, r => {
                    const end = async function() {
                        let users = rCol.users.map(g => `${g.id}`).slice(1);
                        let random = Math.floor(Math.random()* users.length);
                        let winner = users[random];
                        channel.send(`and the winner is **<@${winner}>**. Who won **${givingAway}**`);
                }
                setTimeout(end, 5000)
            })
           
        })
    })
} 
exports.help = {
    name: 'test',
    aliases: []
}             
