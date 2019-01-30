module.exports.run = async (bot, message, args) => {

    let reason = args.join(' ') ? args.join(' ') : 'Jsem afk, takže musíš počkat chvilku ok?';
    let afklist = bot.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            usertag: message.author.tag,
            reason: reason
        };

        bot.afk.set(message.author.id, construct);
        return message.reply(`Jsi afk! Důvod: ${reason}`).then(msg => msg.delete(5000));
    }

};

module.exports.help = {
    name: 'afk',
    aliases: []
};
