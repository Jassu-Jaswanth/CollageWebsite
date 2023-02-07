var {Client} = require('pg');

async function fetchquery(qstrng){
    const client = new Client({
        host:'localhost',
        user:'postgres',
        password:'jaswanth@2002',
        port:5432,
        database:'testone'
    });
    // var dotenv = require('dotenv');
    // dotenv.config();
    await client.connect();
    
    const results = await client.query(qstrng);
    client.end();
    return results;
}

module.exports = {fetchquery}
