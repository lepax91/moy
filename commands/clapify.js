const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (bot, message, args) => {
    message.delete();
  
    if (args.length < 1) return message.channel.send(":x: **| Potřebuji nějaký text na to aby si udělal clapify: .clapify <text>")
    message.channel.send(args.map(randomizeCase).join(':clap:'));
}
exports.help = {
  name: "clapify",
  aliases: []
}
