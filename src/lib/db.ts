import mariadb from 'mariadb' 

export default () => {
    return new Promise((resolve, reject) => {
        const pool = mariadb.createPool({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE
        })

        pool.getConnection().then(conn => {
            console.log(conn)
            resolve(conn)
        }).catch(err => {
            reject(err)
        })
    })
}