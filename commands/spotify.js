const Discord = require('discord.js');

exports.run = (client, message, args) => {

    var user = message.mentions.users.first() || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setTitle('*Spotify | Informace o hudbě*')
                .setColor('FF0000')
                .setThumbnail(trackImg)
                .setDescription(`
 🎵 **Písnička :**  \`${trackName}\`
 📀 **Album :**  \`${trackAlbum}\`
 🎤 **Autor :**  \`${trackAuthor}\`
`)
                .addField('Poslechni si tuto hudbu:', `[${trackUrl}](${trackUrl})`, false);

            return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, **${user.username} nezaregistroval žádnou hudbu.**`);
        }

    } else {
        return message.channel.send(`:x: | **${user.username} neposlouchá žádnou hudbu v Spotify.**`);
    }
};
exports.help = {
  name: 'spotify',
  aliases: []
}
