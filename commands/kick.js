const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const reason = args.slice(1).join(" ")
  const member = message.mentions.members.first();
  const embed = new discord.RichEmbed()
  .addField(`${bot.user.username} Kicking`, `${member.user.username} is outta here! :point_right:`)
  .setTimestamp()
  .setColor("GREEN")
  if (message.member.hasPermission("KICK_MEMBERS") || message.member == message.guild.owner) {
    member.kick(reason)
      .then(() => {
      message.channel.send({embed: embed})
    })
    .catch(() => {
        const emb = new discord.RichEmbed()
        .setDescription(`:x: I couldn't kick ${member.user.username}...`)
        .setTimestamp()
        .setColor("RED")
        message.channel.send({embed: emb})
      })
  } else {
    const em = new discord.RichEmbed()
    .addField(`${bot.user.username} Kicking`, `Sorry, ${message.author.username}, you don't have permission to kick that user.`)
    .setTimestamp()
    .setColor("RED")
    message.channel.send({embed: em})
  }
}

module.exports.help = {name: "kick"}
