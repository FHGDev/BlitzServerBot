const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const type = args[0]
  const game = args.slice(type.length).join(" ")
  const embed = new discord.RichEmbed()
  .setDescription(`I just set my activity to ${type.toLowerCase(),game.toLowerCase()}`)
  .setTimestamp()
  .setColor("RANDOM")
  bot.user.setActivity(game, {type: type})
  message.channel.send({embed: embed})
}

module.exports.help = {name: "setactivity"}
