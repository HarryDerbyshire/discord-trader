const Discord = require ('discord.js');

module.exports = {
    name: 'job',
    aliases: ['j'],
    description: 'For setting up a job',
    args: true,
    guildOnly: true,
    usage: '<title> <description>',
    execute(message, args) {

        // let str = args.join(' ');
        // let splitString = str.match(/\w+|"(?:\\"|[^"])+"/g);
        // let newString = splitString.join(' ');
        // newString = splitString.replace('"', '');
        // console.log(newString);
        var str = args.join(' ')
        let splitString = str.match(/\w+|"(?:\\"|[^"])+"/g);
        const map1 = splitString.map(x => x.replace('"', ''));
        const map2 = map1.map(x => x.replace('"', ''));

        let title = map2[0];
        let description = map2[1];
        message.delete();

        const tradeEmbed = new Discord.MessageEmbed()
            .setColor('#ffae42')
            .setTitle(`${title}`)
            .setAuthor(message.author.username, message.author.displayAvatarURL({format: "png", dynamic: true}))
            .setDescription(`${description}`)
            
        message.channel.send(tradeEmbed);
        
    },
};