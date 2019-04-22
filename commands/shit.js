const Discord = require('discord.js');
    const os = require('opusscript'),
        ffmpeg = require('ffmpeg-binaries');

exports.run = (client, message) => {
   
    var vChannel = message.member.voiceChannel;
    if (!vChannel) return message.channel.send("Musíš být ve voice chatu jinak to nepůjde.");
    vChannel.join()
        .then(connection => {
            const dispatcher = connection.playFile('./sounds/SHIT.mp3', {
                volume: 1
            });
            dispatcher.on('end', end => { vChannel.leave(); });
        }).catch(err => { console.log(`[ERROR] ${err}`) });
}
exports.help = {
    name: "shit",
    aliases: []
}
