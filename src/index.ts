import  express from 'express';
import { join } from "path";
import getConnection  from './lib/db';
import {setRenderer} from './lib/renderer'

const app  = express();
let connection: any;
getConnection().then(conn => {
    connection = conn
}).catch(err  => {
    throw new Error(err)
})

setRenderer(app)

app.set('view engine', 'edge')
app.set('views', join(__dirname , "views"))

app.use('/public',express.static( __dirname + "/public"))

app.get('/', async (req: express.Request, res: express.Response) => {
    res.render('index')
})

app.listen(3000, () => console.log("App Started Listening to 3000"))