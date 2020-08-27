const Discord = require("discord.js")
const botconfig = require("../botsettings.json");
// you need the `MANAGE_MESSAGES` permission to peform this command
module.exports.run = async (bot, message, args) => {
    const messageArray = message.content.split(' ');

    if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('you need the `MANAGE_MESSAGES` permission to peform this command');

    let deleteAmount;

    if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('please provide a number') }

    if (parseInt(args[0]) > 100) {
        return message.reply('you can only delete 100 messages at a time')
    } else {
        deleteAmount = parseInt(args[0]);
    }

    message.channel.bulkDelete(deleteAmount + 1, true);
    message.reply(`successfully deleted **${deleteAmount}** messages.`)
}

module.exports.config = {
    name: "purge",
    description: "purges specified amount of messages.",
    usage: "c!purge {amount}",
    accessableby: ["Mods", "Staff"],
    aliases: ['clear']
}