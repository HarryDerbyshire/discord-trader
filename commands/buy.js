const Discord = require ('discord.js');

module.exports = {
    name: 'buy',
    aliases: ['b'],
    description: 'For showing your interest in a particular item',
    args: true,
    guildOnly: true,
    usage: '<item> <optional quantity>',
    execute(message, args) {       
        const item = args[0];
        let quantity;
        if (args[1]) {
            quantity = args[1];
        } else {
            quantity = 'any amount of'
        }
        

        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#000099')
            .setTitle(`Buying ${quantity} ${item}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
 
        message.channel.send(tradeEmbed);
        
    },
};