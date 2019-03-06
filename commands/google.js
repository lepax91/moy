const Discord = require("discord.js");
const google = require("google");

module.exports.run = async (client, message, args) => {

  google.resultsPerPage = 1
  google.protocol = 'https'
  var nextCounter = 0

  google(args, function (err, res) {
    if (err) console.log(err);

    for (var i = 0; i < res.links.length; ++i) {
      var link = res.links[i];
      if (link.title == null) {
      return void(0)
    }
      if (link.href == null)    {
      return void(0)
    }
      const gEmbed = new Discord.RichEmbed()
        .setAuthor(`Strýček google vyhledal něco pro ${args}`.split(',').join(' '))
        .setColor('#ffc1cc')
        .setThumbnail('http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png')
        .addField('Webová Stránka', link.title)
        .addField('Popisek', link.description)
        .addField('Odkaz', link.href);

        message.channel.send(gEmbed);
    }

    if (nextCounter < 1) {
      nextCounter += 1
      if (res.next) res.next()
    }

  });

}

module.exports.help = {
  name: "google",
  aliases: []
}
