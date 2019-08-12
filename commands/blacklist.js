module.exports.run = async (bot, message, args) => {
  if (message.author.id !== "417403958814965771" && message.author.id !== "273813194861051907") return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.");             			
  const [bool,id] = args
  if (!id) return message.channel.send(">>> :warning: Zadejte ID uživatele, akce **blacklist** se takto nepodaří.");
  if (!bool) return message.channel.send(">>> :warning: Musíš zadat `add` nebo `del`, akce **blacklist** se takto nepodaří.")
  const u = await bot.fetchUser(id)
  
  if (bool == "add") {
    user.findOne({userId: u.id}, (err,data) => {
      if (data) {
        if (u == bot.owner) return message.channel.send("Nemůžu dát Developera do blacklistu, nic neudělal :(")
        if (u.bot == true) return message.channel.send("Nemůžeš dát bota do blacklistu, to doopravdy nejde.");
        if (data.blacklisted) return message.channel.send(`${u.username} je momentálně přidán do blacklistu.`);
        
        data.blacklisted = true
        data.save()
        
        message.channel.send(`>>> :white_check_list: **${u.username}*** je úspěšně přidán do blacklistu.`)
      } else {
        const newUser = new user({
          userId: u.id,
          coins: 0,
          blacklisted: true,
          isAdmin: false
        })
        
        newUser.save()
        
        message.channel.send(`>>> :white_check_mark: **${u.username}*** je úspěšně přidán do blacklistu.`)
      }
    })
  } else if (bool == "del") {
    user.findOne({userId: u.id}, (err,data) => {
      if (data) {
        if (!data.blacklisted) return message.channel.send(`>>> :x: **${u.username}** není v blacklistu!`);
        
        data.blacklisted = false
        data.save()
        
        message.channel.send(`>>> :white_check_mark: **${u.username}** z uživatelského blacklistu!`)
      } else {
        const newUser = new user({
          userId: u.id,
          coins: 0,
          blacklisted: false,
          isAdmin: false
        })
        
        newUser.save()
        
        message.channel.send(`>>> :white_check_mark: **${u.username}** je úspěšně smazán z blacklistu!`);
      }
    })
  }
  
}

module.exports.help = {
  name: "blacklist",
  aliases: [],
}
