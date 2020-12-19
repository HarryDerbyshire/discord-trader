module.exports = {
    name: 'ping',
    args: false,
    description: 'Ping!',
    execute(message) {
        message.channel.send('Pong!');
    },
};
