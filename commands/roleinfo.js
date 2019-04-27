const { RichEmbed } = require('discord.js');
exports.run = (client, message, args) => {
    // Tries to get the first mentioned role or a role ID or a role name (role names are case sensitive)
    let role = message.mentions.roles.first() || message.guild.roles.get(args[0]) || message.guild.roles.find(role => role.name === args[0]);

    // If we can't find any role, then just default to the author's highest role
    if (!role) role = message.member.highestRole;


    // Define our embed
    const embed = new RichEmbed()
        .setColor(role.hexColor)
        .setTitle(`🌐 Role: ${role.name}`)
        .addField('👤 Uživatelé', role.members.size, true)
        .addField('⬜ Hex', role.hexColor, true)
        .addField('📆 Datum vydání', role.createdAt.toDateString(), true)
        .addField('📝 Upravitelné', role.editable.toString(), true)
        .addField('🕹️ Ovládat', role.managed.toString(), true)
        .addField('📋 ID', role.id, true);
    return message.channel.send({
        embed: embed
    });
};
exports.help = {
    name: "roleinfo",
    aliases: []
}
