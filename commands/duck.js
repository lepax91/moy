const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const fetch = require('node-fetch');

module.exports.run = async (client, message, args) => {
    
    fetch('https://api.random-d.uk/random').then((result) => {
      const embed = new RichEmbed()
      .setTitle('Aww.. Ducky!')
      .setColor("RANDOM")
      .setImage(result.body.url)            
      msg.channel.send({ embed });
        
module.exports.help = {
    name: "duck",
    aliases: []
}
