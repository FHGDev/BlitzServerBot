const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
	 const embed = new discord.RichEmbed()
	 .addField(`Main Owners`, `My owners are <@399973532265742336> and <@242734840829575169>.`)
	 .setColor("GREEN") // Set to a different color if you want...
   message.channel.send({embed: embed})
}

module.exports.help = {
   name: "owners"
}
