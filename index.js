const express = require('express')
const app = express()



app.get('/', (req, res) => res.send("The Home Page"));

app.listen(3001, () => {
    console.log("App is listening")
})