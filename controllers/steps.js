'use strict'

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/node-fit.sqlite');

module.exports = {
  // get all steps
  index (req, res) {
    res.render('index');
  },

  // new step form
  newStep (req, res) {
    res.render('new-step');
  },

  // // show note
  // show (req, res) {
  //   res.render('show-note', {
  //     note: req.note
  //   });
  // },

  // // create step
  create (req, res) {
    console.log('>>>>>', req.body);
    console.log(typeof(req.body.stepNumber));
    db.run(`INSERT INTO Steps VALUES(NULL, $date, $steps)`, {
          $date: req.body.stepDate,
          $steps: +req.body.stepNumber
      }, (err) => {
        if (err) throw err;
        res.send('SAVED STEPS!');
      });
  }

  // // delete note
  // destroy (req, res) {
  //   req.note.remove((err) => {
  //     if (err) throw err;

  //     res.redirect('/notes');
  //   });
  // },

  // // edit note
  // edit (req, res) {
  //   Category.find({}, (err, categories) => {
  //     if (err) throw err;

  //     res.render('new-note', {
  //       title: 'New Note',
  //       categories: categories,
  //       note: req.note
  //     });
  //   });
  // },

  // // update note
  // update (req, res) {
  //   req.note.update(req.body, (err) => {
  //       if (err) throw err;

  //       res.redirect(`/notes/${req.note._id}`);
  //     }
  //   );
  // }
};
