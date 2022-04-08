import  express from 'express';
import getConnection  from './lib/db';
import path from 'path';

const app  = express();
let connection: any;
getConnection().then(conn => {
    connection = conn
}).catch(err  => {
    throw new Error(err)
})

app.use('/public',express.static( __dirname + "/public"))

app.get('/', async (req: express.Request, res: express.Response) => {
    res.sendFile( path.join(__dirname, '/views/index.html'))
})

app.listen(3000, () => console.log("App Started Listening to 3000"))