const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const dataObj = {
      burgers: data,
    };
    res.render('index', dataObj);
  });
});

router.post('/api/burgers', (req, res) => {
  burger.insertOne(req.body.name, (result) => {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const burgerID = req.params.id;
  burger.updateOne(
    burgerID,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


module.exports = router;