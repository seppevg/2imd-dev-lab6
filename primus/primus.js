const Primus = require('primus');

const go = (server) => {
    const primus = new Primus(server, {/* options */ });
    primus.on('connection', (spark) => {
        console.log('Received spark');

        spark.on('data', (data) => {
            console.log(data);
            primus.write(data);
        });
    });
}

module.exports.go = go;