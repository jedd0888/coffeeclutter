const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let answer = ["yes", "no", "maybe"] //Creating an array for what should the bot answer
    if (!args.slice(0).join(" ")) return message.channel.send("Please mention the question.")

    let ranswer = Math.floor((Math.random() * answer.length))

    let embed = new Discord.MessageEmbed()
        .setColor("#C73B0F")
        .addField("Your Question", args.slice(1).join(" "))
        .addField("My answer", `**${answer[ranswer]}**`)
    message.channel.send(embed)
}

module.exports.config = {
    name: "8ball",
    description: "Ask a question to the magic 8ball.",
    usage: "c!8ball [question]",
    accessableby: "Members",
    aliases: ["8b"]
}