exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-varsthor
    if (message.member.permissions.has("MUTE_MEMBERS") == true) {
        let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    var guild = client.guilds.find(g => g.id == message.guild.id);
    var mutedRole = message.guild.roles.find(r => r.name == "Muted");
    if (mutedRole == null) {
    	guild.createRole({name: "Muted", color: "GRAY"
    		, permissions: ["READ_MESSAGE_HISTORY"]
    	, mentionable: false}, "For muting people")
    	.then(role => {
    		mutedRole = role;
    		for (var gc in guild.channels.values()) {
    			if (gc.type == "text") {
    				gc.overwritePermissions(role, {
        				'SEND_MESSAGES': false,
        				'ADD_REACTIONS': false
        			}, "To mute people");
    			} else {
    				gc.overwritePermissions(role, {
        				'SPEAK': false
        			}, "To mute people")
    			}
    		}
      });
    } else {
      mutedRole = mutedRole;
    }
    if (member.roles.find(r => r.id == mutedRole.id) != null) {
      return message.reply(`:x: **_Nemůžu ho mutnout, omlouvám se._**`);
    }
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.roles.add(mutedRole)
      .catch(error => {
        return message.reply(`Uživatele jménem ${message.author} nemůžu současně mutnout.`);
      });
    message.reply(`:white_check_mark: Mute byl úspěšný! | ${member.user.tag} byl muted Moderátorem ${message.author.tag} protože: ${reason}`);
    client.modlog(message.guild.id, "Mute", message.author.tag, member.user.tag, reason, "FFA500")
  } else {
    message.channel.send(":x: **_Na tuto akci, nemáš žádnou pravomoc!_**");
  }
};
  
  exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "User"
  };
  
  exports.help = {
    name: "mute",
    aliases: [],
    category: "Moderation",
    description: "Mute a user",
    usage: "mute @user reason"
  };
