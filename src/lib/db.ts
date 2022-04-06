import mariadb from 'mariadb' 

let connection: any;

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

async function connectToDb(){
    try
    {
        const connection = await pool.getConnection()
        console.log(connection)
    }catch(err){
        console.error(err)
    }
}

connectToDb()