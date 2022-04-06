import  express from 'express';
import getConnection  from './lib/db';

const app  = express();
let connection: any;
getConnection().then(conn => {
    connection = conn
}).catch(err  => {
    throw new Error(err)
})

app.get('/', async (req: any, res: any) => {
    var query = "select * from example";
    var rows = await connection.query(query);
    res.status(200).send(rows)
})

app.listen(3000, () => console.log("App Started Listening to 3000"))