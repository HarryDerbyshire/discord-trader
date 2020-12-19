const Discord = require('discord.js');

module.exports = {
    name: 'buy',
    aliases: ['b'],
    description: 'For showing your interest in a particular item',
    args: true,
    guildOnly: true,
    usage: '<item> <optional quantity>',
    execute(message, args) {
        const [item, quantity = 'any amount of'] = args;

        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#C70039')
            .setTitle(`Buying ${quantity} ${item}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({ format: 'png', dynamic: true }));

        message.channel.send(tradeEmbed);
    },
};
