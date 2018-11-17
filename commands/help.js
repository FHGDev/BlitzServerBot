const commands = require('fs').readdirSync("./commands/")
const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    const helpMenu = new discord.RichEmbed()
    .addField(`Commands`, `${commands.join("\n").split(".js")}`)
    .setTimestamp()
    .setColor("RANDOM")
    message.channel.send({embed: helpMenu})
}

module.exports.help = {
    name: "help"
}
