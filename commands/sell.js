const Discord = require ('discord.js');

module.exports = {
    name: 'sell',
    aliases: ['s'],
    description: 'For selling items for emeralds',
    args: true,
    guildOnly: true,
    usage: '<item> <quantity> <no. 0f emeralds wanted>',
    execute(message, args) {       
        const item = args[0];
        const quantity = args[1];
        const price = args[2];

        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#009900')
            .setTitle(`Selling ${quantity} ${item} for ${price} Emeralds`)
            //.setURL('https://discord.js.org/')
            .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
 
        message.channel.send(tradeEmbed);
        
    },
};