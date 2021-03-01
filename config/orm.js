const connection = require('./connection.js');

const orm = {
    selectAll(tableInput, cb) {
        const queryString = `SELECT * FROM ${tableInput};`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne(tableInput, burgerName, cb) {
        let queryString = `INSERT INTO ${tableInput} (burger_name) VALUES (${burgerName});`;
        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne(tableInput, burgerID, cb) {
        let queryString = `UPDATE ${tableInput} SET devoured = !devoured WHERE id = ${burgerID};`;
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
