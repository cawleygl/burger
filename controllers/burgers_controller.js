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
  

module.exports = router;