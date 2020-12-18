const Discord = require ('discord.js');

module.exports = {
    name: 'exchange',
    aliases: ['e'],
    description: 'For when you want to swap an item for another item',
    args: true,
    guildOnly: true,
    usage: '<item you own> <item you want>',
    execute(message, args) {       
        const owns = args[0];
        const wants = args[1];

        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#990000')
            .setTitle(`Trading ${owns} for ${wants}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
 
        message.channel.send(tradeEmbed);
        
    },
};