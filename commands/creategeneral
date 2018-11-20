const discord = require("discord.js")
	const bot = new Discord.Client();
	
module.exports.run = (bot, message, args) => {
message.guild.createChannel('main-chat', 'text')
message.guild.createChannel('pictures', 'text')
message.guild.createChannel('bot-cmds', 'text')
 let em = new discord.RichEmbed()
  .setTitle("Blitzbot Addrole")
  .setDescription(`Okay! I ${message.author.username} created General Category.`)
  .setTimestamp()
  .setFooter(`${message.author.username} created General Category`)
  message.channel.send({embed: em})
  }
};

module.exports.help = {
  name: "createcatchan"
};
