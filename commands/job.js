const Discord = require ('discord.js');

module.exports = {
    name: 'job',
    aliases: ['j'],
    description: 'For setting up a job',
    args: true,
    guildOnly: true,
    usage: '<title> <description>',
    execute(message, args) {       
        let title = args[0];
        let description = args[1];
        const price = args[2];
        message.delete();
        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#ffae42')
            .setTitle(`${title}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
            .addField('Job Description', `${description}`)
 
        message.channel.send(tradeEmbed);
        
    },
};