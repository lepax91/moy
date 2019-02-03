const Discord = require('discord.js')
const db = require('quick.db')
exports.run = (client, message, args) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) {
        message.reply(':x: | Nemáš žádnou pravomoc!')
        return
    }
    var prefix = db.fetch(`guild_${message.guild.id}.prefix`)
    var args1 = message.content.toLowerCase().split(' ')
    if(!args1[1]) {
        var prefix = db.fetch(`guild_${message.guild.id}.prefix`)
        var embed = new Discord.RichEmbed()
        .setDescription('✅ | Váš prefix na tomto botovy je:`' + prefix + '`')
        .setColor('RANDOM')
        message.channel.send(embed)
    }
    if(args1[1] === 'set') {
        var setprefix = args1[2]
        if(!setprefix) {
            message.reply('🤔 | Zadejte jakýkoliv prefix!')
            return
        }
        if(setprefix.lenght > 5) {
            message.reply('❌ | Žádný prefix nikdy nesmí mít 5 znaků!')
            return
        }
        db.set(`guild_${message.guild.id}.prefix`, setprefix)
        var embed1 = new Discord.RichEmbed()
        .setDescription(`✅ | Nastaven prefix na  \`${setprefix}\` pro tento server.`)
        .setColor('RANDOM')
        .setFooter('ID: ' + message.guild.id, client.user.avatarURL)
        message.channel.send(embed1)
    }
}
exports.help = {
    name: 'prefix',
    aliases: []
}
