import  express from 'express';
import { getConnection } from './lib/db';

const app  = express();
let connection: any;
getConnection().then(conn => {
    connection = conn
}).catch(err  => {
    throw new Error(err)
})

app.get('/', (req: any, res: any) => {
    console.log(connection)
    res.status(200).send("Hello World")
})

app.listen(3000, () => console.log("App Started Listening to 3000"))