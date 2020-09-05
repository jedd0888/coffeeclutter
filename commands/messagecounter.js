const Discord = require('discord.js');
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
    let msgs = db.fetch(`messages_${message.guild.id}_${message.author.id}`)
    if (msgs === null) msgs = 0

    message.channel.send(`${message.author} has ${msgs} messages`)
}

module.exports.config = {
    name: "messagecounter",
    description: "Counts the messages you have sent in the server.",
    usage: "c!messagecounter",
    accessableby: "Members",
    aliases: ["msgs", "mymsgs", "msgcounter"]
}