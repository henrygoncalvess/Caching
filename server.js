const express = require('express');
const { createClient } = require('redis');
const client = createClient();

const app = express()

async function exampleGetData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( [ "Usuário 1", "Usuário 2" ] )
        }, 5000)
    })
}

app.get('/', async (req, res) => {
    const dataFromCache = await client.get('exampleGetData')

    if (dataFromCache){
        return res.send(JSON.parse(dataFromCache))
    }

    const response = await exampleGetData()

    await client.set('exampleGetData', JSON.stringify(response), { EX: 180 })

    res.send(response)
})

const startup = async () => {
    await client.connect()

    console.log(await client.ping('conectado ao redis'));

    app.listen(3000, () => {
        console.log('http://localhost:3000');
    })
}

startup()