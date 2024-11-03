const express = require('express');
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

app.listen(3000, () => {
    console.log('http://localhost:3000');
})