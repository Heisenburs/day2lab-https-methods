const express = require('express')
const app = express();

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

// HOME
app.get('/', (req, res) => {
    res.send('<h1>success</h1>')
})


// GET /greeting
app.get('/greeting/:name', (req, res) => {
    console.log(req.params);
    const name = req.params
    res.send(`Hello ${name.name}! How are you?`)
})

// GET /tipPercentage
app.get('/tip/:total/:tipPercentage', (req, res) => {
    console.log(req.params);
    const total = req.params.total
    const tip = req.params.tipPercentage
    res.send(`Tip:  ${tip}`)
})

// GET /magic
app.get('/magic', (req, res) => {
    console.log(req.params);
    const name = req.params
    res.send(`Hello ${name.name}! How are you?`)
})




app.listen(3000, function() {
    console.log(`Listening...`);
})