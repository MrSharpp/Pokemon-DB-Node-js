import  express from 'express';
const app  = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})

app.listen(3000, () => console.log("App Started Listening to 3000"))