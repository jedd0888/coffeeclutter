const Discord = require('discord.js');
const covid = require('novelcovid');

module.exports.run = async (bot, message, args) => {
    const covidStats = await covid.all()

    return message.channel.send(new Discord.MessageEmbed()
        .setTitle('COVID-19 Stats')
        .setColor('#C73B0F')
        .addFields(
            { name: `Cases`, value: covidStats.cases.toLocaleString(), inline: true },
            { name: `Cases Today`, value: covidStats.todayCases.toLocaleString(), inline: true },
            { name: `Deaths`, value: covidStats.deaths.toLocaleString(), inline: true },
            { name: `Deaths Today`, value: covidStats.todayDeaths.toLocaleString(), inline: true },
            { name: `Recovered`, value: covidStats.recovered.toLocaleString(), inline: true },
            { name: `Recovered Today`, value: covidStats.todayRecovered.toLocaleString(), inline: true },
            { name: `Infected Right Now`, value: covidStats.active.toLocaleString(), inline: true },
            { name: `Critical Condition`, value: covidStats.critical.toLocaleString(), inline: true },
            { name: `Tested`, value: covidStats.tests.toLocaleString(), inline: true }
        )
    )
}

module.exports.config = {
    name: "covid",
    description: "COVID-19 stats.",
    usage: "c!covid",
    accessableby: "Members",
    aliases: ["corona", "covid19", "covid-19", "covidstats"]
}