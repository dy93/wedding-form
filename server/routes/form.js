const express = require('express');

const router = express.Router();
const dbHelper = require('../lib/dbHelper');

/* GET home page. */
router.post('/', (req, res, next) => {
  dbHelper.execAsync(`
    INSERT INTO form (
      name,
      attend,
      invitor,
      relation,
      people,
      vegetable,
      baby_seats,
      need_invitation,
      address,
      email,
      memo
    ) VALUES (
      $name,
      $attend,
      $invitor,
      $relation,
      $people,
      $vegetable,
      $baby_seats,
      $need_invitation,
      $address,
      $email,
      $memo
    );
  `, {
      $name: req.body.name,
      $attend: req.body.attend,
      $invitor: req.body.invitor,
      $relation: req.body.relation,
      $people: req.body.people,
      $vegetable: req.body.vegetable,
      $baby_seats: req.body.babySeats,
      $need_invitation: req.body.needInvitation,
      $address: req.body.address,
      $email: req.body.email,
      $memo: req.body.memo,
    })
    .then(() => {
      res.json({ ok: true });
    }).catch(() => {
      res.status(500).json({ ok: false });
    });
});

module.exports = router;