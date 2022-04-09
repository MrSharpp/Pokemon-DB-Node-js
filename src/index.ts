import  express from 'express';
import { join } from "path";
import dotenv from 'dotenv'
import getConnection  from './lib/db';
import {setRenderer} from './lib/renderer'

// head declearation
let connection: any;

// head function init
dotenv.config()
console.log(process.env.DB_USER)
getConnection().then(conn => {
    connection = conn
}).catch(err  => {
    throw new Error(err)
})
const app  = express();
setRenderer(app)


app.set('view engine', 'edge')
app.set('views', join(__dirname , "views"))

app.use('/public',express.static( __dirname + "/public"))

app.get('/', async (req: express.Request, res: express.Response) => {
    res.render('index')
})

app.listen(3000, () => console.log("App Started Listening to 3000"))