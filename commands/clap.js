const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

module.exports.run = (bot, message, args) => {
    
    if (args.length < 1) return message.channel.send("Tlesknu jen když přidáš nějaký ten tExT")
    message.channel.send(args.map(randomizeCase).join('👏'));
}

module.exports.help = {
    name: "clap",
    aliases: []
}
