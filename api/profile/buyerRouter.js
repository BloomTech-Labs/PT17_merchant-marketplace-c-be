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

router.post('/', authRequired, async (req, res) => {
  const profile = req.body;
  if (profile) {
    const id = profile.id || 0;
    try {
      await Model.findById('buyer_profile', id).then(async (pf) => {
        if (pf == undefined) {
          await Model.create('buyer_profile', profile).then((profile) =>
            res
              .status(200)
              .json({ message: 'profile created', profile: profile[0] })
          );
        } else {
          res.status(400).json({ message: 'profile already exists' });
        }
      });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: e.message });
    }
  } else {
    res.status(404).json({ message: 'Profile missing' });
  }
});

module.exports = router;
