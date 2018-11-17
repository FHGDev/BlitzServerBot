const discord = require("discord.js")

module.exports.run = (bot, message, args) => {
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`You need to mention a role.`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Invalid Permissions!");
  
  if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);
  member.addRole(role.id);
  let em = new discord.RichEmbed()
  .setTitle("Blitzbot Addrole")
  .setDescription(`Okay! I added the role ${rolename} to the user ${member.user.username}.`)
  .setTimestamp()
  .setFooter(`${message.author.username} added role ${rolename} to user ${member.user.username}.`)
  message.channel.send({embed: em})
  if (member.displayName) {
    em.setDescription(`Okay! I added the role ${rolename} to the user ${member.displayName}.`)
    em.setFooter(`${message.author.username} added role ${rolename} to user ${member.displayName}.`)
  }
};

module.exports.help = {
  name: "addrole"
};
