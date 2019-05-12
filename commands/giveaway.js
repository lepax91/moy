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

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send(':x: Nemáš pravomoce Administrátor nebo výše!');
    message.channel.send(`:tada: Označ nějaký kanál kde budeš uspořádat Giveaway!`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':x: Tento kanál nemůžu najít, buď neexistuje nebo si ho neoznačil.');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit('').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':x: Tento čas neexistuje nebo ho zadáváte špatně.');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':tada: Zadej nějaký čas do své uspořádané soutěže!).then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                desc = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setTitle(":tada: Giveaway právě teď začala! :tada:")
                  .setDescription(`desc`,\n\n\n\nKlikni na reakci :tada: aby jsi se mohl zapojit do soutěže!)
                  .setColor("RANDOM")
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Není zaznamenáno**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(':tada: Giveaway skončila! :tada:')
                       .setColor("RANDOM")
                       .addField('Giveaway právě teď skončila!',`**Výherce této Giveaway: ${gFilter}**`)
                       .setFooter(`🎉 Gratuluji ${gFilter} Užij si odměnu!`, message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:tada: Právě teď se uspořádá giveaway!`);
                } catch(e) {
                  msgg.edit(`:x: Nemám pravomoc na Giveaway!`);
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

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send(':x: Musíš mít pravomoc Administrator nebo výše!');
    message.channel.send(`:tada: Označ nějaký kanál kde budeš uspořádat Giveaway!`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':x: Tento kanál nemůžu najít, buď neexistuje nebo si ho neoznačil.');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':tada: Zadej nějaký čas do své uspořádané soutěže!').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':x: Tento čas neexistuje nebo není k dispozici.');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':tada: Napiš nějakou odměnu kterou budeš dávat do soutěže!').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                desc = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()          
                  .setTitle(`:tada: Giveaway začíná :tada:`)
                  .setDescription(`desc`,\n\n\n\nKlikni na reakci :tada: aby jsi se mohl zapojit do soutěže!)
                  .setColor("RANDOM")
                  .setFooter(`Time: ${duration / 6000}`, message.author.username, message.author.avatarURL);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Není zaznamenáno**';
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(':tada: Giveaway skončila! :tada:')
                       .setColor("RANDOM")
                       .addField('Giveaway právě teď skončila!',`**Výherce této Giveaway: ${gFilter}**`)
                       .setFooter(`🎉 Gratuluji ${gFilter} Užij si odměnu!`, message.guild.name, message.guild.iconURL);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msgg.edit(`:tada: Právě teď se uspořádá Giveaway!`);
                } catch(e) {
                  msgg.edit(`:x: Nemám pravomoc na Giveaway!`);
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
