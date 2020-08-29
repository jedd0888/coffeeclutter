const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let perm = message.member.hasPermission("MANAGE_NICKNAMES")
    if (!perm) return message.channel.send("you need the `MANAGE_NICKNAMES` permission to use this")

    let user = message.mentions.members.first()
    if (!user) return message.channel.send("user is needed")

    let name = args.slice(1).join(" ")
    if (!name) return message.channel.send("new nickname is needed")

    user.setNickname(name)

    message.channel.send(`${user.user.tag}'s name have changed to ${name}`)
}

module.exports.config = {
    name: "nickname",
    description: "Nicks a user",
    usage: "c!nickname {user} {nickname}",
    accessableby: ["Mods", "Staff"],
    aliases: ["nick", "setnick"]
}