const discord = require("discord.js")

module.exports.run = (bot, message, args) => {
 message.reply('Do you really want me to delete all channels? This is NOT reversable!')
 message.react('👍')
 message.react('👎')
 message.guild.createChannel('rules', 'text')
 message.guild.createChannel('annoucements', 'text')
 message.guild.createChannel('main-chat', 'text')
 message.guild.createChannel('pictures', 'text')
 message.guild.createChannel('bot-cmds', 'text')
 message.guild.createChannel('spam', 'text')
 message.guild.createChannel('Voice Chat 1', 'voice')
 message.guild.createChannel('Game Chat', 'voice')
 message.guild.createChannel('staff-chat','text') 
 message.guild.createChannel('staff chat','voice')
 message.guild.createChannel('AFK', 'voice')
 message.guild.setAFKchannel('AFK')
 
  message.guild.createRole(name: 'Owner')
   message.guild.owner.addRole('Owner')
  message.guild.createRole(name: 'Server Creator')
  message.guild.author.addRole('Server Creator')
  message.guild.createRole(name: 'Staff')
  message.guild.createRole(name: 'Member')
   message.guild.members.addRole('Member')
 let em = new discord.RichEmbed()
  .setTitle("Blitzbot Server created")
  .setDescription(`Okay! I ${message.author.username} created this serber.`)
  .setTimestamp()
  .setFooter(`${message.author.username} created this server`)
  message.channel.send({embed: em})
  }

module.exports.help = {
  name: "createserver"
};
