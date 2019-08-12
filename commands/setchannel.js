module.exports.run = (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(">>> :warning: Musíš mít pravomoc na tento příkaz!");
    const name = args.join(" ")
    if (!name) return message.channel.send(">>> :warning: Musíte zadat nějaký název kanálu, jinak se tato akce nepodaří.");
    

    message.channel.setName(name)
    .then(c => {
        message.channel.send(`>>> :white_check_mark: Kanál byl úspěšně přejmenován na **${name}**`)
    })
    .catch(() => message.channel.send(">>> :warning: Tento kanál nemohu najít, omlouvám se.."))
}

module.exports.help = {
    name: "setchannel",
    aliases: []
}
