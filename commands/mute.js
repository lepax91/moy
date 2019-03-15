exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-varsthor
    if (message.member.permissions.has("MUTE_MEMBERS") == true) {
        let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    var guild = client.guilds.find(g => g.id == message.guild.id);
    var mutedRole = message.guild.roles.find(r => r.name == "Muted");
    if (mutedRole == null)
    	return;
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Žádný důvod nebyl nalezen";
    if (member.roles.find(r => r.id == mutedRole.id) == null) {
      return message.reply(`:x: Nemůžu unmutnout toho, co nemá Muted roli!`);
    }
    await member.roles.remove(mutedRole)
      .catch(error => {
        return message.reply(`:x: **_ Uživatele ${message.author} nemohu najít, zjisti si jestli je na serveru.`);
      });
    message.reply(`${member.user.tag} byl unmuted Moderátorem: ${message.author.tag} Protože: ${reason}`);
    client.modlog(message.guild.id, "Unmute", message.author.tag, member.user.tag, důvod, "00FF00")
  } else {
    message.channel.send(":x: **_Na tuto akci potřebuješ permissions, jinak to nejde!_**");
  }
};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "User"
  };
  
  exports.help = {
    name: "unmute",
    aliases: [],
    category: "Moderation",
    description: "Unmute a user",
    usage: "unmute @user reason"
  };
