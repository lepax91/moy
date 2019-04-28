const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var desc = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send(":x: **Prosím, uveďte správný povolání svého profilu.**")
    if (!db.get("povolani").find({ auteur: author }).value()) {
        db.get("povolani").push({ auteur: author, povolani: prace }).write()
      } else {
        db.get("povolani").find({ auteur: author }).assign({ auteur: author, povolani: prace }).write()   
}
message.channel.send(":white_check_mark: **Vaše povolání bylo úspěšně přidáno do Profilu!**")
}
exports.help = {
  name: "setpov",
  aliases: []
}

