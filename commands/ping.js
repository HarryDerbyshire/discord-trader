const Discord = require("discord.js");

module.exports = {
    name: 'ping',
    args: false,
    description: 'Ping!',
    execute(message, args) {

        const pingEmbed = new Discord.MessageEmbed()
            .setColor('#009900')
            .setTitle('Some Title')
            .setURL('https://discord.js.org/')
            .setAuthor('Hawkite', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
            .setDescription('This is a description')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            .addFields(
                { name: 'Regular field title', value: 'Some value here'},
                {name: '\u200B', value: '\u200B'},
                {name: 'Inline field title', value: 'Some value here or something', inline: true},
                {name: 'Inline field title', value: 'Some value here or something', inline: true}
            )
            .addField('Inline field title', 'Some other value here', true)
            .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Some example of some footer text', 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(pingEmbed);
        // message.channel.send('Pong!');

    },
};