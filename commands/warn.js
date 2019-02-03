module.exports.run = async (bot, message, args) => { // Run the command when a command is called

    var Discord = require('discord.js');
    var db = require('quick.db')
    var send = require('quick.hook')
    
    //Warn Command Brought To You By Zinx#9129
    //All Rights Reserved Towards Zinx#9129
    //Feel Free To Check Me Out! http://Hinami.cf
    //This Command Was Coded By Myself

    try {
    if (!message.member.hasPermission('KICK_MEMBERS')) return send(message.channel, "Sorry, but you do not have valid permissions! If you believe this is an error, contact an owner.", {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    const modlog = message.guild.channels.find(channel => channel.name === 'mod-log');
    const warnlog = message.guild.channels.find(channel => channel.name === 'warnings');
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!args[0]) return send(message.channel, 'Please specify a person & reason for the warn! `-!warn <Zinx#9129> <reason>`', {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    let reason = message.content.split(" ").slice(2).join(" ");
    if (!reason) return send(message.channel, 'Please specify a person & reason for the warn!', {
        name: 'Warn Error',
        icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
    })
    const casenumbers = new db.table('CASENUMBERs')
    const guildcasenumber = await casenumbers.fetch(`case_${message.guild.id}`)
    const a = guildcasenumber
    const b = a + 1
    casenumbers.set(`case_${message.guild.id}`, b)
    //  console.log(guildcasenumber)
    const numberwarn = new db.table('WARNNUMBERs')
    const num1 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
    const y = 1
    const m = y + num1
    numberwarn.set(`user_${user.id}_${message.guild.id}`, m)
    // console.log(num1)


    if(!guildcasenumber == Number) {
        casenumbers.set(`case_${message.guild.id}`, 1)
    }

    if(!num1 == Number) {
        db.set(`user_${user.id}_${message.guild.id}`, 1)
    }

    if (!modlog) return message.channel.send('**Please create a channel with the name `mod-log`**')
    if (!warnlog) return message.channel.send('**Please create a channel with the name `warnings`**')
    
        //user.kick({ reason: `${reason}`})
        const userwarn = new db.table('USERWARNINGs')
        const num2 = await numberwarn.fetch(`user_${user.id}_${message.guild.id}`)
        const warns = await userwarn.fetch(`warn_${user.id}_${num2}_${message.guild.id}`)
        userwarn.set(`warn_${user.id}_${num2}_${message.guild.id}`, reason)

    if (user) {

        if (!user) return send(message.channel, "Couldn't find user.", {
            name: 'Warn Error',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        })
        if (user.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return send(message.channel, "The user you are trying to warn is either an Admin or someone who has Administration Rights", {
            name: 'Warn Error',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        })

        if (num2 == 3){
            const kickEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Kicked Due To Recieving 3 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID ${mod.id} | Staff User ${mod.tag}`)
            send(modlog, kickEmbed, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
            const kickEmbedpub = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Kicked Due To Recieving 3 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Contact Staff If You Think This Is An Error`)
            send(warnlog, kickEmbedpub, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your warn-log! Have you set my permissions correctly?"));
        user.send(`You have been warned & kicked in ${message.guild.name}\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        message.guild.member(user).kick(reason)
        } else if (num2 >= 4) {
            const banEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Banned Due To Recieving 4 Warnings.\n**Reason**: ${reason}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID: ${mod.id} | Staff User: ${mod.tag}`)
            send(modlog, banEmbed, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
            const banEmbedpub = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Banned Due To Recieving 4 Warnings.\n**Reason**: ${reason}\n\n`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Contact Staff If You Think This Is An Error`)
            send(warnlog, banEmbedpub, {
                name: 'Warn',
                icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
            }) .catch(() => message.reply("Cannot post in your warn-log! Have you set my permissions correctly?"));
        user.send(`You have been banned in ${message.guild.name}\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        numberwarn.set(`user_${user.id}_${message.guild.id}`, 0)
        message.guild.member(user).ban(reason).catch(() => message.reply("Cannot Ban "+user+ "! Give me permissions!"));
        } else {

        const warnEmbed = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Has Been Warned\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Staff UID: ${mod.id} | Staff User: ${mod.tag}`)
        send(modlog, warnEmbed, {
            name: 'Warn',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        }) .catch(() => message.reply("Cannot post in your mod-log! Have you set my permissions correctly?"));
        const warnEmbedpub = new Discord.RichEmbed()
            .setAuthor('Warn')
            .setDescription(`**Case Number**: ${guildcasenumber}\n\nUser <@${user.id}> Was Warned\n**Reason**: ${reason}\n\nTotal Warnings: ${num2}`)
            .setColor('DARK_RED')
            .setTimestamp()
            .setThumbnail(user.displayAvatarURL)
            .setFooter(`Contact Admins If You Think This Is An Error`)
        send(warnlog, warnEmbedpub, {
            name: 'Warn',
            icon: 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/denied-512.png'
        }) .catch(() => message.reply("Cannot post in your warn-log! Have you set my permissions correctly?"));
        user.send(`You have been warned in ${message.guild.name}, Total Warnings: ${num2}\n**Reason**: ${reason}`) .catch(() => message.reply("Cannot Send Direct Message To "+user));
        }}
    }catch(err) {console.log(`Error with Warnings ${err}`)}}


module.exports.help = { // This is the config for a command. Able to add things like proper usage & etc.
    name: "warn",
    aliases: []
    
}
