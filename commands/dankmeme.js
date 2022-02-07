const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    got('https://www.reddit.com/r/dankmemes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeDownvotes = content[0].data.children[0].data.downs;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`)
        embed.setURL(`${memeUrl}`)
        embed.setImage(memeImage)
        embed.setColor('#C73B0F')
        embed.setFooter({
            text: `👍 ${memeUpvotes} 👎 ${memeDownvotes} | 💬 ${memeNumComments}`
        })
        message.reply({
            embeds: [embed]
        });
    })
}

module.exports.config = {
    name: "dankmeme",
    description: "Grabs a **dank** meme from the r/dankmemes subreddit.",
    usage: "dankmeme",
    accessableby: "Members",
    aliases: ["dm"]
}