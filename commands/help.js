const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //We have to set a argument for the help command beacuse its going to have a seperate argument.
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if (helpArgs[0] === 'test') {
        return message.reply("This is a Gaming information Command.")
    }

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if (!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setAuthor(`List of avaliable commands:`)
            .setDescription('```dankmeme | facebookmeme | meme | purge```')
            .addFields({ name: 'Prefix', value: '```c!```', inline: true })
            .setColor('#C73B0F')

        message.channel.send(embed);
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if (helpArgs[0]) {
        let command = helpArgs[0];

        if (bot.commands.has(command)) {

            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
                .setAuthor(`${command.config.name} Command`)
                .setDescription(`
            **Description:** ${command.config.description || "There is no description for this command."}
            **Usage:** ${command.config.usage || "No usage."}
            **Permissions:** ${command.config.accessableby || "Members"}
            **Aliases:** ${command.config.aliases || "No Aliases"}
            `)
                .setColor('#C73B0F')

            message.channel.send(embed);
        }
    }
}

module.exports.config = {
    name: "help",
    description: "",
    usage: "?help",
    accessableby: "Members",
    aliases: []
}