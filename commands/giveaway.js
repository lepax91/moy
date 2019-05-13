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

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send(':x: Nemůžeš uspořádat soutěž protože nejsi **Administrator* nebo výšší pravomoc!');
    message.channel.send(`:tada: **V jakém kanálu chceš uspořádat Giveaway?**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':x: Tento kanál neexistuje nebo ho nemůžu najít.');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':tada: Zadej nějaký čas do této soutěže!').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':x: Tento čas neexistuje! **_TIP: Když chcete udělit čas do soutěže nedávejte nikdy zkratku: (m/h/s)!_**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':tada: Zadej prosím nějakou odměnu kterou chceš dát do soutěže!').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()                           
                  .setTitle("Soutěží se o"  +   title)
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setDescription(`Klikni na reakci :tada: pokud se chceš připojit do soutěže!`)
                  .setFooter(`🎉 Tento giveaway trvá celkem ${duration / 60000}m 🎉`);
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Není specifikováno**';
                       let endEmbed = new Discord.RichEmbed()
                       .setTitle("Soutěží se o"  +   title)
                       .setColor("RANDOM")
                       .setTimestamp()
                       .setDescription(`Klikni na reakci :tada: pokud se chceš připojit do soutěže!`)
                       .setFooter(`🎉 Tento giveaway trvá celkem ${duration / 60000}m 🎉`);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msg.edit(`:tada: **_Giveaway setup se dokončil, Právě teď se odehrává v kanálu Giveaway!_**`);
                } catch(e) {
                  msg.edit(`:x: Bohužel na toto nemám pravomoc, nastav mi roli **Dot** na Administrátor`);
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

    if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return message.channel.send('Nemůžeš uspořádat soutěž protože nejsi **Administrator* nebo výšší pravomoc!');
    message.channel.send(`:tada: **V jakém kanálu chceš uspořádat Giveaway?**`).then(msgg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name', collected.first().content);
        if(!room) return message.channel.send(':x: Nemůžu tento kanál neexistuje nebo není k dispozici');
        room = collected.first().content;
        collected.first().delete();
        msgg.edit(':tada: Zadej nějaký čas do této soutěže!').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':x: Tento čas neexistuje! **_TIP: Když chcete udělit čas do soutěže, nikdy nedávejte zkratku: (m/h/s)!_**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msgg.edit(':tada: Zadej prosím nějakou odměnu kterou chceš dát do soutěže!').then(msg => {
              message.channel.awaitMessages(filter, {
                max:  1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setTitle("Soutěží se o"  +   title)
                  .setColor("RANDOM")
                  .setTimestamp()
                  .setDescription(`Klikni na reakci :tada: pokud se chceš připojit do soutěže!`)
                  .setFooter(`Tento giveaway trvá celkem ${duration / 60000}m`);                  
                  message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                         if(users.size === 1) gFilter = '**Není specifikováno**';
                       let endEmbed = new Discord.RichEmbed()
                       .setColor("RANDOM")
                       .setTimestamp()
                       .addField(':tada: Giveaway právě teď skončila! :tada:',`Výherce této soutěže: ${gFilter}`)
                       .setFooter(`🎉 Gratuluji výherci, doufám že se ti odměna bude líbit!`);
                       m.edit(endEmbed);
                     },duration);
                   });
                  msg.edit(`:tada: Giveaway setup se dokončil, právě teď se odehrává v kanálu Giveaway!`);
                } catch(e) {
                  msg.edit(`:x: Bohužel nemám pravomoc, nastav mi roli na Administrátora.`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }


module.exports.help = {
    name: "test",
    aliases: []
}
