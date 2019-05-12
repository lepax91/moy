const Discord = require("discord.js");
 
exports.run = async (bot, message, args, tools) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':x: **Na toto vůbec nemáš pravomoc, musíš mít roli **Administrator** nebo výše!').then(() => {
        message.react(`⛔`);
    });
    let channel;
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max:10});
    const collector2 = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, {max:10});
    message.channel.send(`:tada: Giveaway setup právě začal! Označ nějaký kanál který budeš pořádat **Giveaway**!`);
    collector.on(`collect`, col => {
        if(!col.mentions.channels.first())return message.channel.send(`:tada: Prosím označ nějaký Giveaway kanál!`);
        channel = col.mentions.channels.first();
        message.channel.send(`**:tada: Giveaway kanál nastaven na:**\n > <#${channel.id}>`);
        message.channel.send(`🎁 Co chceš dát do Giveawaye?`);
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
            collector2.stop()
            let givingAway = col2.content
            if(givingAway === channel)return;
 
            message.channel.send(`**Právě jsi dal do Giveawaye:**\n > ${givingAway}`);
 
            let desc = `**Co můžeš vyhrát?:**\n\n${givingAway}\n\n\n\n`
            desc += `Pokud se chceš zapojit do Giveawaye klikni na reakci :tada:`
 
            let embed = new Discord.RichEmbed()
            .setColor("#ff0000")
            .setTitle(`:tada: Giveaway začíná! :tada:`)
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
                        channel.send(`:tada: Giveaway právě teď skončilo! Vyhrál(a): **<@${winner}>**! Vyhraváš: **${givingAway}**`);
                }
                setTimeout(end, 5000)
            })
           
        })
    })
}
 
exports.help = {
    name: 'giveaway',
    aliases: []
}
