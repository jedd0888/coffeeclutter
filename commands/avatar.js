const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const user = message.mentions.users.first() || message.author;

    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#C73B0F")
        .setAuthor(user.tag)
        .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
        .setFooter(`Requested By: ${message.author.tag}`)
        .setTimestamp()
    message.channel.send(avatarEmbed);
}

module.exports.config = {
    name: "avatar",
    description: "Shows the avatar of a user",
    usage: "c!avatar {user}",
    accessableby: "Members",
    aliases: ["av"]
}