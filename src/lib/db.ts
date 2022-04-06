import mariadb from 'mariadb' 

let connection: any;

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'practice'
})

export default () => {
    return new Promise((resolve, reject) => {
        pool.getConnection().then(conn => {
            console.log(conn)
            resolve(conn)
        }).catch(err => {
            reject(err)
        })
    })
}