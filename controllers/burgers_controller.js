const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const dataObj = {
      burgers: data,
    };
    console.log(dataObj);
    res.render('index', dataObj);
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const burgerID = req.params.id;
  console.log('Burger ID: ' + burgerID);
  console.log('req.body: ' + req.body);
  
  burger.updateOne(
    burgerID,
    (result) => {
      console.log('Result: ' + result)
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


module.exports = router;