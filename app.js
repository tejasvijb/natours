const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.status(404).json({message: 'Hello World!', app: 'Natours'})
})


app.post('/', (req, res) => {
    res.send('You can post to this endpoint...')
})


const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

