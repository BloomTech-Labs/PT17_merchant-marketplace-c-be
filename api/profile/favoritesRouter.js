const express = require('express');
const authRequired = require('../middleware/authRequired');
const router = express.Router();
const Model = require('../globalModel');

router.get('/:id/favorites', authRequired, function (req, res) {
  const id = String(req.params.id);
  Model.favorites('favorite_category', id)
    .then((favorites) => {
      res.status(200).json(favorites);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post('/favorites', authRequired, function (req, res) {
  const profile = req.profile;
  const favoriteid = req.body.favoriteid;
  Model.create('favorite_category', {
    category_id: favoriteid,
    buyer_profile_id: profile.id,
  })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.delete('/favorites', authRequired, function (req, res) {
  const favoriteid = req.params.id;
  try {
    Model.findById('favorite_category', favoriteid)
      .then(() => {
        Model.remove('favorite_category', favoriteid);
      })
      .then(() => {
        res.status(200).json({ message: 'Favorite Removed' });
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
