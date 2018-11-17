module.exports.run = (bot, message, args) => {
    if (!bot.owners.includes(message.author.id)) return;
    bot.user.setActivity(`for b!help | ${bot.guilds.size} servers`, {type: "WATCHING"})
    message.channel.send("I set my activity back to normal.")
}

module.exports.help = {name: "setnormal"}
