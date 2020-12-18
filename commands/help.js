const { prefix } = require('../config.json')
module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: 'Lists all of the commands or info about a specific command.',
    args: false,
    guildOnly: false,
    usage: '<command name>',
    execute(message, args) {

        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all the available commands');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\`to get information on a specific command!`);

            return message.author.send(data, {split: true})
                .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have your DMs disabled?');
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!commands) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Description** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
        
        message.channel.send(data, { split: true });
    },
};