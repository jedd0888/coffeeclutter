const Discord = require('discord.js');

module.exports.run = async (bot, message) => {
    const args = message.content.slice(botsettings.prefix.length).split(/ +/)

    let perm = message.member.hasPermission("MANAGE_NICKNAMES")
    if (!perm) return message.channel.send("you must require the `MANAGE_NICKNAMES` perm to use this command!.")

    let user = message.mentions.members.first()
    if (!user) return message.channel.send("You must mention the user!")

    let name = args.slice(1).join(" ")
    if (!name) return message.channel.send("You must write the new nickname!")

    user.setNickname(name)

    message.channel.send(`${user.user.tag}'s name have changed to ${name}`)
}

module.exports.config = {
    name: "nickname",
    description: "Changes someone's name on the server.",
    usage: "c!nickname {user} {nickname}",
    accessableby: ["Mods", "Staff"],
    aliases: ["setnickname", "nick"]
}