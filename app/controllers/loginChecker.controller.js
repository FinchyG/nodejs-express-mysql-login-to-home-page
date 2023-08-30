const mysql = require('mysql2');

// connection configurations
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'OdoDS9Warf!Tuvok?',
  database: 'loginDemo'
});

// connect to database
connection.connect(function (err) {
  if (err)
    throw err
  console.log('You are now connected with mysql database...')
})

// Find a single user with a username
exports.findOne = (req, res) => {

  connection.query('SELECT * FROM loginDetails WHERE username=?',
          [req.params.username],
          function (error, results, fields) {
            if (error)
              throw error;
            res.json(results);
          });
};