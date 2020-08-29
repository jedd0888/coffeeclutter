const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = async (bot, message, args) => {
    weather.find({search: args.slice(0).join(" "), degreeType: "C" }, function (error, result) {
        //C is celicius
        if(error) return console.log(error)
        if(!args[0]) return message.channel.send("please specify a place to check the weather in")
        
        if(result === undefined || result.length === 0) return message.channel.send("not a valid location")
        
        const current = result[0].current;
        const location = result[0].location;
        
        let weatherembed = new discord.MessageEmbed()
        .setColor("#C73B0F")
        .setDescription(`${current.skytext}`)
        .setAuthor(`Weather for ${current.observationpoint}`)
        .setThumbnail(current.imageURL)
        .addField(`Degree Type` , `Celcius`)
        .addField(`Temperature` , `${current.temperature}`) // Spelling mistake sorry
        .addField(`TimeZone` , `UTC${location.timezone}`) //In discord its by default UTC
        .addField(`Wind` , current.windisplay)
        .addField(`Humidity` , `${current.humidity}%`)
        .addField(`Feels Like` , `${current.feelslike}°`)
        
        message.channel.send(weatherembed)
      })
}

module.exports.config = {
    name: "weather",
    description: "Finds the weather for a specific country",
    usage: "c!weather {country}",
    accessableby: "Members",
    aliases: []
}