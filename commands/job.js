const Discord = require('discord.js');

module.exports = {
    name: 'job',
    aliases: ['j'],
    description: 'For setting up a job',
    args: true,
    guildOnly: true,
    usage: '<title> <description>',
    execute(message, args) {
        const [title, description] = args
            .join(' ')
            .match(/\w+|"(?:\\"|[^"])+"/g)
            .map((x) => x.replace(/"/g, ''));

        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#ffae42')
            .setTitle(`${title}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true }))
            .setDescription(`${description}`);

        message.channel.send(tradeEmbed);
    },
};
