const discord = require("discord.js")
const config = require('../config.json')

module.exports.run = (bot, message, args) => {
 message.reply('Do you really want me to delete all channels? This is NOT reversable!')
 if(!message.author.id == config.owners) return message.delete
 message.react('👍')
 message.react('👎')
 if(!message.reactions.count = 2) return message.send('Finding users that reacted')
 if(!message.reactions.users == config.owners or client.id) return message.reply('Failed to see reactions because someone else reacted')
 message.guild.channels.delete
 message.guild.createChannel('rules', 'text' [{
  deny: ['SEND_MESSAGES'],
}])
 message.guild.createChannel('annoucements', 'text' [{
  deny: ['SEND_MESSAGES'],
}])
 message.guild.createChannel('main-chat', 'text')
 message.guild.createChannel('pictures', 'text')
 message.guild.createChannel('bot-cmds', 'text')
 message.guild.createChannel('spam', 'text')
 message.guild.createChannel('Voice Chat 1', 'voice')
 message.guild.createChannel('Game Chat', 'voice')
 message.guild.createChannel('staff-chat','text' [{
  deny: ['SEND_MESSAGES'],
  deny: ['READ_MESSAGES'],
}]) 
 message.guild.createChannel('staff chat','voice' [{
  deny: ['CONNECT'],
}])
 message.guild.createChannel('AFK', 'voice'[{
  allow: ['CONNECT'],
  deny: ['SPEAK'],
}])
  message.guild.setAFKchannel('AFK')
   message.guild.createRole({
  name: 'Owner',
  color: 'BLUE',
  mentionable: true
})
    message.guild.owner.addRole('Owner')
   message.guild.createRole({
  name: 'Server Creator',
  color: 'YELLOW',
  mentionable: true
})
    message.guild.author.addRole('Server Creator')
   message.guild.createRole({
  name: 'Staff',
  color: 'GREEN',
  mentionable: true
})
   message.guild.createRole({
  name: 'Mmeber',
  color: 'ORANGE',
  mentionable: true
})
    message.guild.members.addRole('Member')
 let em = new discord.RichEmbed()
  .setTitle("Blitzbot Server created")
  .setDescription(`Okay! I ${message.author.username} created this server.`)
  .setTimestamp()
  .setFooter(`${message.author.username} created this server`)
  message.channel.send({embed: em})
  }

module.exports.help = {
  name: "createserver"
};
