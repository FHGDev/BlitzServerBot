const pkg = require('../package.json')
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()  
  .addField("Hi!", `Hello, I'm ${bot.user.username} version ${pkg.version}, a Discord bot running on NodeJS Version 8.`)
  .addField(`When was I born?`,`My create date 23rd of October 2018`)
  .addField(`Version?`,`I'm currently running on Discord.js version 12.0.0 which utilizes the latest version of Discord.js, an *unofficial* Discord library by hydrabolt.`)
  .addField(`Creators`,`The main owners are <@399973532265742336> and <@242734840829575169>.`)
  .addField(`How to use me`,`To see what I can do, use b!help`)
  .addField(`More!`,`My invocation method is using prefixes, currently, I only respond to messages beginning with b!`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "info",
  usage: ``,
  information: "I'll tell you some information about myself."
}
