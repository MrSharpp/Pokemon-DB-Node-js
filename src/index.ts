import  express from 'express';
import { getConnection } from './lib/db';

const app  = express();
let connection = getConnection()

app.get('/', (req: any, res: any) => {
    console.log(connection)
    res.status(200).send("Hello World")
})

app.listen(3000, () => console.log("App Started Listening to 3000"))