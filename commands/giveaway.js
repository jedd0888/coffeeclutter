const Discord = require('discord.js');
const ms = require('ms')

module.exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send(`you did not specify your tim!`);
    if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m"))
        return message.channel.send(`the time needs to have days (d) or hours (h) or minutes (m)`);
    if (isNaN(args[0][0])) return message.channel.send(`the time must be a number`);

    let prize = args.slice(1).join(" ");
    if (!prize) return message.channel.send(`no prize specified`);

    let Embed = new discord.MessageEmbed()
        .setTitle(prize)
        .setDescription(`Host: ${message.author}\nTime: ${args[0]}`)
        .setTimestamp(Date.now() + ms(args[0]))
        .setColor(`#C73B0F`);
    let m = await message.channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
        if (m.reactions.cache.get("🎉").count <= 1) {
            const embed = new discord.MessageEmbed()
                .setColor("#C73B0F")
                .setDescription("no winners")
            m.edit(embed)
            return message.channel.send(`couldn't generate a winner as there is no one in that giveaway`);
        }

        let winner = m.reactions.cache.get("🎉").users.cache.filter((b) => !b.bot).random();

        const embed = new discord.MessageEmbed()
            .setColor("#C73B0F")
            .setDescription(`Winner: ${winner}`)
        m.edit(embed)

        message.channel.send(`the winner of the giveaway is ${winner}`);
    }, ms(args[0]));
}

module.exports.config = {
    name: "giveaway",
    description: "Starts a giveaway",
    usage: "c!giveaway {time} {prize}",
    accessableby: "Staff",
    aliases: []
}