const express = require('express');
const authRequired = require('../middleware/authRequired');
const router = express.Router();
const Model = require('../globalModel');

router.get('/', authRequired, function (req, res) {
  Model.findAll('buyer_profile')
    .then((profiles) => {
      res.status(200).json(profiles);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
