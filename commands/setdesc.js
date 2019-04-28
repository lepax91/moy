const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var desc = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send(":x: **Prosím, uveďte správný description svého profilu.**")
    if (!db.get("description").find({ auteur: author }).value()) {
        db.get("description").push({ auteur: author, description: desc }).write()
      } else {
        db.get("description").find({ auteur: author }).assign({ auteur: author, description: desc }).write()   
}
message.channel.send(":white_check_mark: Váš description byl úspěšně přidán do Profilu!**")
}
exports.help = {
  name: "setdesc",
  aliases: []
}
