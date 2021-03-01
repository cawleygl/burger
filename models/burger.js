const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(burgerName) {
        orm.insertOne('burgers', burgerName, (res) => cb(res));
    },
    updateOne(burgerID) {
        orm.insertOne('burgers', burgerID, (res) => cb(res));
    },
};

module.exports = burger;
