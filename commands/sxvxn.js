const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
	 const embed = new discord.RichEmbed()
	 .addField( `SXVXN`, `Hey, so sxvxn, hes a good lad, he is just going through alot, so lets make this project good and work! FOR SXVXN!`)
	 .setColor("YELLOW") // Set to a different color if you want...
   message.channel.send({embed: embed})
}

module.exports.help = {
   name: "sxvxn"
}