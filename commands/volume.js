module.exports.run = (bot, message, args) => {
  const vc = message.member.voiceChannel
  if (!vc) return;
  vc.join().then(conn => {
    conn.setVolume(args.join(" "))
    if (args.join(" ") > 200) {
      message.channel.send(">>> :x: Limit hlasitosti je 200%, dál to už nejde.")
    } else {
      message.channel.send(`>>> :white_check_mark: Nastavena hudba na **${args.join(" ")}%**`)
    }
  })
}

module.exports.help = {
  name: "volume",
  aliases: []
}
