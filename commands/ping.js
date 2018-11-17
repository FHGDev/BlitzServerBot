const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
   const ping = Math.floor(bot.ping)
   const embed = new discord.RichEmbed()
   .setTimestamp() // that's for the time the command was used
   .addField(`${bot.user.username} Ping...`, `PONG! My ping is ${ping}ms.`) // For the field of the embed
   .setColor("RANDOM") // Set to a different color if you want...
   message.channel.send({embed: embed})
}

module.exports.help = {
   name: "ping"
}