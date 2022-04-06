import mariadb from 'mariadb' 

let connection: any;

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'practice'
})

export let getConnection =  () => {
    return new Promise((resolve, reject) => {
        pool.getConnection().then(conn => {
            // i am getting here : ConnectionPromise { .....
            console.log(conn)
            resolve(conn)
        }).catch(err => {
            reject(err)
        })
    })
}