const Discord = require('discord.js');

module.exports.run = async (bot, message, args, tools) => {
    
    // Array of responses
    let responses = [
        'cože ne',
        'samozřejmě že ano',
        'nevim, nejsem aladin',
        'nemel mrdky'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter(fetched);
    
    // Send Embed
    message.channel.send(embed);
 
module.exports.help = {
           name: '8ball',
           aliases: ['']
}           
