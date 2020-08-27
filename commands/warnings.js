const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;

    let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`**${user.username}** has *${warnings}* warning(s)`);
}

module.exports.config = {
    name: "warnings",
    description: "Checks a users warnings",
    usage: "c!warn {user}",
    accessableby: ["Mod", "Staff"],
    aliases: []
}