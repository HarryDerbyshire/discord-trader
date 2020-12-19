const { Tags } = require('../utils/database');

module.exports = {
    name: 'addtag',
    args: true,
    description: 'Ping!',
    async execute(message, args) {
        const tagName = args[0];
        const tagDescription = args[1];

        try {
            const tag = await Tags.create({
                name: tagName,
                description: tagDescription,
                username: message.author.username,
            });
            return message.reply(`Tag ${tag.name} added.`);
        } catch (e) {
            if (e.name === 'SequelizeUniqueConstraintError') {
                return message.reply('That tag already exists');
            }
            console.log(e);
            return message.reply('Something went wrong whilst adding that tag');
        }
    },
};
