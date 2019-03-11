const Discord = require('discord.js');
const Client = require('fortnite');

var botConf = JSON.parse(fs.readFileSync('./config.json'));
var fortniteApiKey = botConf.fortniteApiKey;

const fortnite = new Client(fortniteApiKey);

exports.run = async (client, message, args, tools) => {
  let username = args[0];
  let platform = args[2] || 'pc';
  let gamemode = args[1];
  
  if(gamemode != 'solos' && gamemode != 'duos' && gamemode != 'squads' && gamemode != 'lifetime') return message.channel.send('**Usage** : `??fortnite <Username> <Gamemode [Solos | Duos | Squads | Lifetime]> <Platform [PC | PSN | XBL]>`');
  
  if (!username) return message.channel.send(":x: **_Zadej správný jméno ve Fortnitu._**");
  
  let data = fortnite.user(username, platform).then(data => {
    
    let stats = data.stats;
    
    if (gamemode === 'solos') {
    
      let solos = stats.solo;
      
      let score = solos.score;
      let kd = solos.kd;
      let matches = solos.matches;
      let kills = solos.kills;
      let wins = solos.wins
      let top3 = solos.top_3;
      
      let statsEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite - _Solo Statistiky_ - ${platform}`)
        .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
        .setAuthor(data.username)
        .setColor('RANDOM')
        .addField('Wins', wins, true)
        .addField('Kills', kills, true)
        .addField('Score', score, true)
        .addField('Matches Played', matches, true)
        .addField('Top 3s', top3, true)
        .addField('Kill/Death Ratio', kd, true);
    
      message.channel.send(statsEmbed);
      
    } else if (gamemode === 'duos') {
    
      let duos = stats.duo;
      
      let score = duos.score;
      let kd = duos.kd;
      let matches = duos.matches;
      let kills = duos.kills;
      let wins = duos.wins
      let top3 = duos.top_3;
      
      let statsEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite - _Duo Statistiky_ - ${platform}`)
        .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
        .setAuthor(data.username)
        .setColor('RANDOM')
        .addField('Wins', wins, true)
        .addField('Kills', kills, true)
        .addField('Score', score, true)
        .addField('Matches Played', matches, true)
        .addField('Top 3s', top3, true)
        .addField('Kill/Death Ratio', kd, true);
      
    } else if (gamemode === 'squads') {
    
      let squads = stats.squad;
      
      let score = squads.score;
      let kd = squads.kd;
      let matches = squads.matches;
      let kills = squads.kills;
      let wins = squads.wins
      let top3 = squads.top_3;
      
      let statsEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite - _Squads Stats_ - ${platform}`)
        .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
        .setAuthor(data.username)
        .setColor('RANDOM')
        .addField('Wins', wins, true)
        .addField('Kills', kills, true)
        .addField('Score', score, true)
        .addField('Matches Played', matches, true)
        .addField('Top 3s', top3, true)
        .addField('Kill/Death Ratio', kd, true);
      
    } else {
    
      let stats = data.stats;
      let lifetime = stats.lifetime;
    
      let score = lifetime[6]['Score'];
      let mplayed = lifetime[7]['Matches Played'];
      let wins = lifetime[8]['Wins'];
      let winper = lifetime[9]['Win%'];
      let kills = lifetime[10]['Kills'];
      let kdr = lifetime[11]['K/d'];
    
      let statsEmbed = new Discord.RichEmbed()
        .setTitle(`Fortnite - _Všechny Statistiky_ - ${platform}`)
        .setURL(`https://fortnitetracker.com/profile/${platform}/${username}`)
        .setAuthor(data.username)
        .setColor('RANDOM')
        .addField('Wins', wins, true)
        .addField('Kills', kills, true)
        .addField('Score', score, true)
        .addField('Matches Played', mplayed, true)
        .addField('Win Percentage', winper, true)
        .addField('Kill/Death Ratio', kdr, true);
    
      message.channel.send(statsEmbed);
      
    }
  });
}
exports.help = {
    name: "fortnite",
    aliases: []
}
