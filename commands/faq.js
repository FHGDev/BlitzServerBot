const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
	 const embed = new discord.RichEmbed()
	 .addField( `What is this bot?`, `This bot is a bot made for creating discord servers! With some moderation features!`)
	 .setColor("YELLOW") // Set to a different color if you want...
   message.channel.send({embed: embed})
}

module.exports.help = {
   name: "faq"
}
