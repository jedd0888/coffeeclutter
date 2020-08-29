const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('you need the `MANAGE_NICKNAMES` to perform this command');

    const member = message.mentions.members.first();

    if(!member) return message.channel.send('user is needed to change the nickname');
    if(!args.slice(1).join(" ")) return message.channel.send(`please include what would you like ${member}'s nickname to be`)
    member.setNickname(args.slice(1).join(" ")), message.channel.send(`successfully set ${member} nickname to ${args.slice(1).join(" ")}`);
}

module.exports.config = {
    name: "nickname",
    description: "Nicks a user",
    usage: "c!nickname {user} {nickname}",
    accessableby: ["Mods", "Staff"],
    aliases: ["nick", "setnick"]
}