const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  var room;
  var title;
  var duration;
  var gMembers;const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  var room;
  var title;
  var duration;
  var gMembers;
  var filter = m => m.author.id === message.author.id;
 // if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **you should have "MANAGE GUILD" permission**');
    message.channel.send(`🤔 | V jakém kanálu chceš začít giveaway?`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':x: | Omlouvám se, ale tento kanál nemohu najít.');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('🤔 | Napiš čas této soutěže, jinak bude zamítnuto.').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **you must rewrite the command``write a correct time``**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit('🤔 | Jaká bude cena?').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(`🎉 Giveaway 🎉`)
                  .setTitle(title)
                  .setDescription(`Time : ${duration / 60000} Minute`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Nespecifikováno**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('🎉 Giveaway je ukončen!' ,`Výherce je : ${gFilter}`)
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`🎉 Giveaway se právě teď spustil, uvidíme kdo bude výherce..`);
                } catch(e) {
                  msgg.edit(`:x: | Omluvte mě, ale nemám žádnou pravomoc na tuto akci..`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }

//JEBE MUUU

  var filter = m => m.author.id === message.author.id;
 // if(message.content.startsWith(prefix + "giveaway")) {

    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':x: | Zamítnuto, tuto akci nemohu udělat protože nemám pravomoc!');
    message.channel.send(`🤔 | V jakém kanále, by si chtěl začít Giveaway?`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':x: | Nemohu najít tento kanál!');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('🤔 | Napiš čas této soutěže, jinak bude zamítnuto!').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':x: | Tento čas není k dispozici!');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit('🤔 | Jaká je cena?').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setAuthor(`Tanki Online`)
                  .setTitle(title)
                  .setDescription(`Time : ${duration / 60000} Minute`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Nespecifikováno**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('🎉 Giveaway právě teď skončil!,`Výherce této soutěže je : ${gFilter}!')
                       .setFooter(message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`🎉 Giveaway se právě teď spustil!`);
                } catch(e) {
                  msgg.edit(`:x: | Omlouvám se, ale tuto akci nemohu povolit když memám pravomoc!`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }

//JEBE MUUU

module.exports.help = {
    name: "giveaway",
    aliases: []
}
