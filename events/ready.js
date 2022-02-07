const Discord = require("discord.js");
const botsettings = require(`${process.cwd()}/botsettings.json`);

module.exports = bot => {
    console.log(`${bot.user.username} is online`);
    bot.user.setActivity("{prefix}help"
        .replace("{prefix}", botsettings.prefix), {
            type: "WATCHING"
        })
};