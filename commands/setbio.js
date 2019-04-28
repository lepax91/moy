const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var bio = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send(":x: **Prosím, uveďte správný description svého profilu.**")
    if (!db.get("bio").find({ auteur: author }).value()) {
        db.get("bio").push({ auteur: author, field: bio }).write()
      } else {
        db.get("bio").find({ auteur: author }).assign({ auteur: author, field: bio }).write()   
}
message.channel.send(":white_check_mark: Váš description byl úspěšně přidán do Profilu!**")
}
exports.help = {
  name: "setbio",
  aliases: []
}
