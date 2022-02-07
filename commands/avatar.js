const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    console.log(args[0])
    const member = message.mentions.users.first() || message.author;

    const avatarEmbed = new Discord.MessageEmbed()
        .setColor("#C73B0F")
        .setAuthor({
            name: member.tag
        })
        .setImage(member.displayAvatarURL({
            dynamic: true
        }))
        .setFooter({
            text: `Requested By: ${message.author.tag}`
        })
        .setTimestamp();

    message.reply({
        embeds: [avatarEmbed]
    })
};

module.exports.config = {
    name: "avatar",
    description: "Shows the avatar of a user",
    usage: "avatar {user}",
    accessableby: "Members",
    aliases: ["av"]
};