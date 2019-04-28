const Discord = require('discord.js');

exports.run = (client, message, args) => {
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('./db.json')
        const db = low(adapter)
        db.defaults({ description: [], credits: [], note: []}).write()
        var author = message.author.id;
       
    if (!db.get("credits").find({ auteur: author }).value()) {
        db.get("credits").push({ auteur: author, credits: 500 }).write()
 fa
        } else {
  
          var usercreditsdb = db.get("credits").filter({ auteur: author  }).find('credits').value()
  
          var credits = Object.values(usercreditsdb)
  
          db.get("credits").find({ auteur: author }).assign({ auteur: author, credits: credits[1] += 500 }).write()   
    }
    message.channel.send(":white_check_mark: **Právě jste získali 500 kreditů. Počkejte prosím 2 hodiny, než tuto akci provedete znovu.**")   



}
module.exports.help = {
    name: "daily",
    aliases: []
}
