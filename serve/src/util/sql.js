//引入mysql
const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '246787',
    database: 'hotshopmark'
});
module.exports = pool;