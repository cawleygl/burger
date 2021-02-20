const connection = require('./connection.js');

const orm = {
    selectAll(cb) {
        const queryString = `SELECT * FROM burgers;`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne(burgerName, cb) {
        let queryString = `INSERT INTO burgers (burger_name) VALUES (${burgerName});`;
        console.log(queryString);
        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    updateOne(burgerID, cb) {
        let queryString = `UPDATE burgers SET devoured = !devoured WHERE id = ${burgerID};`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
};

module.exports = orm;
