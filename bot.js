// Main bot load
const discord = require('discord.js')
const fs = require('fs')
const bot = new discord.Client()
const prefix = "$"
const token = process.env.token
const fireLogger = require('./logger.js').fireLogger
bot.commands = new discord.Collection()
bot.owners = ['242734840829575169', '399973532265742336']
fs.readdir('./commands/', (err, files) => {
   if (err) return console.log("Error loading commands.");
   files.filter(f => f.split(".").pop() == "js").forEach((f,i) => {
       bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`))
    })
})
// Bot finding
bot.on('ready', () => {
   console.log(`${bot.user.username} ready!`)
   bot.user.setActivity(`Loading ${bot.user.username}...`, {type: "STREAMING", url: "https://twitch.tv/discordapp"}) 
   setTimeout(() => {
      bot.user.setActivity(`for ${prefix}help | ${bot.guilds.size} servers`, {type: "LISTENING"})
   },10000)
   
   fireLogger(`${bot.user.username} started up!`, bot, bot.user.avatarURL)
 })
// Prefix cmds 
bot.on('message', message => {
    if (!message.guild) return;
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;
   
   const mArray = message.content.split(" ");
   const args = mArray.slice(1);
   const loggedcmd = mArray[0].slice(prefix.length)
   const cmd = bot.commands.get(loggedcmd);
// Logs
  if (cmd) {
      cmd.run(bot, message, args)
      console.log(`${message.author.username} just used the ${loggedcmd} command.`)
      fireLogger(`${message.author.username} used the ${loggedcmd} command.`, bot, bot.user.avatarURL)
   }
})
// Join logs
bot.on('guildCreate', guild => {
   const gname = guild.name
   const em = new (require('discord.js').RichEmbed)
   .setDescription(`I just joined ${gname}.`)
   .setTimestamp()
   .setColor("RED")
   bot.channels.get('channelid').send({embed: em})
})

bot.login(token)
