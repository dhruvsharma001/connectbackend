const mongoose = require('mongoose');

const Contacts = require('../models/Contacts');

const contacts = {};

contacts.get = (req, res, next) => {
  Contacts.find()
    // .sort({ _id: -1 })
    // .select({
    //   _id: 0,
    // })
    .then((data) => {
      if (data) {
        res.json({ data });
      } else {
        res.json({ error: 'Empty Set' });
      }
    });
};

contacts.add = (req, res, next) => {
  if (req.body) {
    Contacts.findOne(
      {
        connectToken: req.body.connectToken,
      },
      function (err, doc) {
        if (doc) {
          res.status(200).json({ res: 'Already exits' });
        } else {
          let record = new Contacts();
          record.connectToken = req.body.connectToken;
          record.data = req.body.data;
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

module.exports = contacts;
