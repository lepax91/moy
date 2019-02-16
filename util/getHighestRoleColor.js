module.exports = (client, msg) => {
  let color = 0
  if (msg.channel.guild) {
    const rolesIds = msg.channel.guild.members.get(client.user.id).roles
    let roles = []
    for (let roleId of rolesIds) {
      roles.push(msg.channel.guild.roles.get(roleId))
    }
    roles = roles.sort((a, b) => a.position > b.position ? -1 : 1)
    if (roles.length > 0) {
      color = roles[0].color
    } else {
      color = 16777215
    }
  } else {
    color = 16777215
  }
  return color
}
