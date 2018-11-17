const id = "511281772902744064"
const discord = require('discord.js')

module.exports.fireLogger = async (msg, bot, icon) => {
  const channel = bot.channels.get(id)
  const embed = new discord.RichEmbed()
  .setTitle("Blitzbot Logger")
  .setDescription(msg)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter(`Blitzbot Logging | By FHGDev#1646`)
  await channel.send({embed: embed})
}
