const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client(fortnite api key);

module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1];

    if(!username) return message.channel.send(":x: Zadej správný jméno, jak se někdo jmenuje ve Fortnitu.")
    if(!platform) return message.channel.send(':x: Už skoro jseš na správný cestě, ale něco ještě chybí a to je platforma: `.fornite <jméno> <platforma>`') 

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        let embed = new Discord.RichEmbed()
        .setTitle("**_Statistky pro Fortnite_**")
        .setAuthor(data.username)
        .setColor("RANDOM")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Win%", winper, true)
        .addField("K/D", kd, true)
        .setTimestamp()
        .setFooter("Požadoval: " + message.author.tag, message.author.avatarURL)

        message.channel.send(embed);
    }).catch((err) => {
      message.channel.send(':x: Uživatel nebyl nalezen, či neexistuje.');
      console.error(err);
    });
}

module.exports.help = {
    name:"fortnite",
    aliases: []
} 
