const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('./db.json')
const db = low(adapter)

exports.run = (client, message, args) => {
    var args = message.content.split(" ").slice(1);
    var age = args.join(" ")
    var author = message.author.id;
    if (!args[0]) return message.channel.send(":x: **Prosím, zadej to takhle:** `.setage <věk>`")
    if (!db.get("age").find({ auteur: author }).value()) {

        db.get("age").push({ auteur: author, age: age }).write()

      } else {

        var useragedb = db.get("age").filter({ auteur: author }).find('age').value()

        var age = Object.values(useragedb)

        db.get("age").find({ auteur: author }).assign({ auteur: author, age: age }).write()   
}
    message.channel.send(":white_check_mark: Tvůj věk byl úspěšně přidán do příkazu _Profile_!**")
}

module.exports.help = {
    name: "setage",
    aliases: []
}
