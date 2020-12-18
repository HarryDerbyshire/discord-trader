const auth = require('../auth.json');
module.exports = {
    name: 'reload',
    aliases: [''],
    description: 'reloads a command',
    args: true,
    guildOnly: true,
    usage: '<command to reload>',
    execute(message, args) {
        if (message.author.id !== auth.ownerID) { //stops any users from reloading commands
            message.reply('only cool people can use this command');
        } else
        {
            const commandName = args[0].toLowerCase();
            const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
            if (!command) return message.channel.send(`There is no command with the name or alias \`${commandName}\`, ${message.author}!`);
    
            delete require.cache[require.resolve(`./${command.name}.js`)];
    
            try {
                const newCommand = require(`./${command.name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
                message.channel.send(`Command \`${command.name}\` was reloaded!`);
            } catch (error) {
                console.error(error);
                message.channel.send(`There was an error while loading in the command \`${command.name}\`:\n\`${error.message}\``);
            }
        };                
    },
};

