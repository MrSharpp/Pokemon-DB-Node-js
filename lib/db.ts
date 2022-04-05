import mariadb from 'mariadb' 

let connection: any;

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root'
})

export const getConnection = async () => {
    if(!connection){
       let connection = await pool.getConnection()
       return connection
    }else return connection;
}