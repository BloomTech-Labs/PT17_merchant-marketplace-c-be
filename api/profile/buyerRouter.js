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

router.get('/:id', authRequired, function (req, res) {
  const id = String(req.params.id);
  Model.findById('buyer_profile', id)
    .then((profile) => {
      if (profile) {
        res.status(200).json(profile);
      } else {
        res.status(200).json({ error: 'ProfileNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
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

router.put('/:id', authRequired, function (req, res) {
  const profile = req.body;
  const id = String(req.params.id);
  if (profile) {
    Model.findById('buyer_profile', id)
      .then(
        Model.update('buyer_profile', id, profile)
          .then((updated) => {
            res
              .status(200)
              .json({ message: 'profile updated', profile: updated[0] });
          })
          .catch((err) => {
            res.status(404).json({
              message: `Could not update profile '${id}`,
              error: err.message,
            });
          })
      )
      .catch((err) => {
        res.status(404).json({
          message: `Could not find profile '${id}`,
          error: err.message,
        });
      });
  }
});

module.exports = router;
