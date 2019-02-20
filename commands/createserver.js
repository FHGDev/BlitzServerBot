const discord = require("discord.js")
const config = require('../config.json')

module.exports.run = (bot, message, args) => {
if (args[0] == false) {
  message.author.send("Thanks for using me to create your server! This argument you sent us was blank, this means we will set up roles. To make channels, run:\nInfo\nGeneral\nStaff")
  message.guild.createRole({
    name: "Staff",
    color: "RED",
    mentionable: true,
    permissions: [{
      KICK_MEMBERS: true,
      BAN_MEMBERS: true,
      MANAGE_CHANNELS: true,
      ADD_REACTIONS: true,
      VIEW_AUDIT_LOG: true,
      PRIORITY_SPEAKER: true,
      CONNECT: true,
      SPEAK: true,
      MUTE_MEMBERS: true, 
      DEAFEN_MEMBERS: true, 
      MOVE_MEMBERS: true, 
      USE_VAD: true, 
      CHANGE_NICKNAME: true,
      MANAGE_NICKNAMES: true,
      MANAGE_ROLES: true,
      SEND_MESSAGES: true,
      SEND_TTS_MESSAGES: false,
      MANAGE_MESSAGES: true,
      EMBED_LINKS: true,
      ATTACH_FILES: true,
      READ_MESSAGE_HISTORY: true,
      MENTION_EVERYONE: true,
    }],
    position: "2"
  })
  message.guild.createRole({
    name: "Owner",
    color: "RED",
    mentionable: true,
    permissions: [{
      ADMINISTRATOR: true
    }],
    position: "1"
  })
} else { 
  if (args[0] == "Information") {
    message.guild.createChannel('Info', 'category'[{
      deny: ['SEND_MESSAGES'],
    }])
    message.guild.createChannel('rules', 'text')
    message.guild.createChannel('announcements', 'text')
    let em1 = new discord.RichEmbed()
    .setTitle("INFORMATION CREATED")
    .setDescription(`I just finished making the information section.`)
    .setTimestamp()
    .setFooter(`${message.author.username} created this section`)
    message.channel.send({embed: em1})
  } else {
    if (args[0] == "General") {
      message.guild.createChannel('General', 'category')
      message.guild.createChannel('main-chat', 'text')
      message.guild.createChannel('pictures', 'text')
      message.guild.createChannel('bot-cmds', 'text')
      message.guild.createChannel('Voice Chat 1', 'voice')
      message.guild.createChannel('Voice Chat 2', 'voice')
      message.guild.createChannel('Voice Chat 3', 'voice')
      message.guild.createChannel('Voice Chat 4', 'voice')
      let em2 = new discord.RichEmbed()
      .setTitle("GENERAL CREATED")
      .setDescription(`I just finished making the general section.`)
      .setTimestamp()
      .setFooter(`${message.author.username} created this section`)
      message.channel.send({embed: em2})
    } else {
      if(args[0] == "Staff") {
        message.guild.createChannel('Staff' , 'category')
        message.guild.createChannel('staff-text', 'text')
        message.guild.createChannel('Staff Chat', 'voice')
        let em3 = new discord.RichEmbed()
        .setTitle("STAFF CREATED")
        .setDescription(`I just finished making the staff section.`)
        .setTimestamp()
        .setFooter(`${message.author.username} created this section`)
        message.channel.send({embed: em3})
      } else {
        if(args[0] == "AFK") {
          message.guild.createChannel('AFK', 'category')
          message.guild.createChannel('AFK', 'voice')
          message.guild.setAFKChannel('AFK')
          let em4 = new discord.RichEmbed()
          .setTitle("AFK CREATED")
          .setDescription(`I just finished making the afk section.`)
          .setTimestamp()
          .setFooter(`${message.author.username} created this section`)
          message.channel.send({embed: em4})
        }
      }
    }
  }
}
}

module.exports.help = {
  name: "createserver"
};