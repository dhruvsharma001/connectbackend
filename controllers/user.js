const mongoose = require('mongoose');

const Users = require('../models/Users');

const users = {};

users.get = (req, res, next) => {
  Users.find()
    // .sort({ _id: -1 })
    .select({
      _id: 0,
      connectToken: 1,
    })
    .then((data) => {
      if (data) {
        res.json({ data });
      } else {
        res.json({ error: 'Empty Set' });
      }
    });
};

users.add = (req, res, next) => {
  if (req.body) {
    Users.findOne(
      {
        connectToken: req.body.connectToken,
      },
      function (err, doc) {
        if (doc) {
          res.status(200).json({ res: 'Already exits' });
        } else {
          let record = new Users();
          record.name = req.body.name || '';
          record.connectToken = req.body.connectToken;
          record
            .save()
            .then((udata) => {
              res.json({ data: udata });
            })
            .catch((err) => {
              console.log(err);
              res.status(503).json({ err: err.errmsg });
            });
        }
      }
    );
  } else {
    res.status(503).json({ err: 'Not data found.' });
  }
};

module.exports = users;
