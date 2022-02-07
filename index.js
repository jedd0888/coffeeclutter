const {
    Client,
    Intents,
    Collection
} = require('discord.js');
const {
    prefix,
    token
} = require('./botsettings.json');
const {
    readdir
} = require("fs");

const bot = new Client({
    shards: "auto",
    allowedMentions: {
        parse: [],
        repliedUser: false
    },
    partials: [],
    // restTimeOffset: 0,
    failIfNotExists: true,
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

require("./util/eventHandler")(bot);

bot.commands = new Collection();
bot.aliases = new Collection();

readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!")
    };

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        bot.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            bot.aliases.set(alias, pull.config.name)
        })
    })
});

bot.on("messageCreate", async message => {
    if (message.author.bot || message.channel.type === "dm") return;

    // let messageArray = message.content.split(" ");
    // let cmd = messageArray[0];
    // let args = message.content.substring(message.content.indexOf(' ') + 1);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift()?.toLowerCase();

    if (!message.content.startsWith(prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if (commandfile) commandfile.run(bot, message, args)
});

bot.login(process.env.token || token);