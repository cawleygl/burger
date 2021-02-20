const orm = require('../config/orm.js');

const burger = {
    selectAll() {
        orm.selectAll((res) => cb(res));
    },
    insertOne(burgerName) {
        orm.insertOne(burgerName, (res) => cb(res));
    },
    updateOne(burgerID) {
        orm.insertOne(burgerID, (res) => cb(res));
    },
};

module.exports = burger;
