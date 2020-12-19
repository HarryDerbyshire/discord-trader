const fs = require('fs');
// require the discord.js module
const Discord = require('discord.js');
const { Tags } = require('./utils/database');
const auth = require('./auth.json');
const config = require('./config.json');

const { prefix } = config;

// create a new Discord client
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

commandFiles.forEach((file) => {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
});

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
    Tags.sync();
    console.log('Ready!');
});

// login to Discord with your app's token
client.login(auth.token);

client.on('message', (message) => {
    if (message.content.includes('u7g')) {
        message.channel.bulkDelete(1);
    }

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName)
        || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (command) {
        if (command.guildOnly && message.channel.type === 'dm') {
            message.reply('I can\'t execute that command inside DMs!');
        } else
        if (command.args && !args.length) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
            }

            message.channel.send(reply);
        } else {
            try {
                command.execute(message, args);
            } catch (error) {
                console.error(error);
                message.reply('there was an error trying to execute that command!');
            }
        }
    }
});
