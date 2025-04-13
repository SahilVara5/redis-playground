const client = require('../client');

async function init(){
    await client.expire("user:4", 10);
    const result = await client.get('user:3');
    console.log("Result ->", result);
}

module.exports = init;