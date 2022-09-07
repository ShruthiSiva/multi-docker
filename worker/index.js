const keys = require("./keys");
const redis = require('redis');

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    //If connection with redis server is lost, attempt to reconnect once every 1 sec
    retry_strategy: () => 1000
});

const sub = redisClient.duplicate();

function fib(index) {
    if(index < 2) return 1;
    return fib(index - 1) + fib(index - 2);
}

sub.on('message', (channel, message) => {
    // hset is a hashmap. Key is the message/index, value is the fibonacci number
    redisClient.hset('values', message, fib(parseInt(message)))
});

sub.subscribe('insert')