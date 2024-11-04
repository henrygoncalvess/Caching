const express = require('express');
const { createClient } = require('redis');

const app = express()

async function exampleGetData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([ { data: "123" }, { data: "456"} ] )
        }, 2000)
    })
}

app.get('/', async (req, res) => {
    const response = await exampleGetData()

    res.send(response)
})

const startup = async () => {
    const client = createClient();

    await client.connect()

    console.log(await client.ping('conectado ao redis'));

    app.listen(3000, () => {
        console.log('http://localhost:3000');
    })
}

startup()