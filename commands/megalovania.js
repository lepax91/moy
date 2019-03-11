const Discord = require('discord.js');
const opus = require('opusscript');

exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
        message.channel.send('*You are not in a voice channel.*')
        return;
    }
    voiceChannel.join().then(connection => {
        const dispatcher = connection.playFile('./sounds/megalovania.mp3');
        dispatcher.on("end", end => { voiceChannel.leave(); });
    }).catch(err => console.log(err));
}
exports.help = {
  name: "megalovania",
  aliases: [],
  category: "Miscelaneous",
  description: "Says yur text in big LETTERS",
  usage: "megalovania"
};
