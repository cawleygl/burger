const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },
    insertOne(burgerName, cb) {
        orm.insertOne('burgers', burgerName, (res) => cb(res));
    },
    updateOne(burgerID, cb) {
        orm.updateOne('burgers', burgerID, (res) => cb(res));
    },
};

module.exports = burger;
