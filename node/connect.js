var mysql = require('mysql');
// 连接数据库的配置
var connection = mysql.createConnection({
    // 主机名称，一般是本机
    host: 'localhost',
    // 数据库的端口号，如果不设置，默认是3306
    port: 3000,
    // 创建数据库时设置用户名
    user: 'root',
    // 创建数据库时设置的密码
    password: '',
    // 创建的数据库
    database: 'wechat'
});
// 与数据库建立连接
connection.connect();
// 查询数据库
connection.query('SELECT * FROM persons', function(err, rows, fields) {
    // if (err) throw err;
    // console.log('The solution is: ', rows[0].solution);
    console.log(err);
    console.log(rows);
    console.log(fields)
});
// 关闭连接
connection.end();