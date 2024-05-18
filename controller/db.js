import mysql from "mysql";


const pool = mysql.createPool({
    connectionLimit: 10,
    // host: process.env.DB_HOST,
    // user: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DBNAME
    host:'bfomuy9ncjqw2wv29btr-mysql.services.clever-cloud.com',
    user:'uilynrxufhwqnxpm',
    password:'rYiR8RrI68aAPOUuwVph',
    database:'bfomuy9ncjqw2wv29btr'
});

console.log(pool)

pool.getConnection((err, connection) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection back to the pool
});

export default pool;
