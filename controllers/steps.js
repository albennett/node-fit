'use strict'

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/node-fit.sqlite');

module.exports = {
  // get all steps
  showAllSteps (req, res) {
    db.all(`SELECT * FROM Steps ORDER BY Steps_date;`,
      function (err, steps) {
        if (err) throw err;
        console.log('ALL STEPS>>>', steps);
        res.render('show-all-steps', {
          steps: steps
        });

      });
  },

  // new step form
  newStep (req, res) {
    res.render('new-step');
  },

  // create step
  create (req, res) {
    console.log('>>>>>', req.body);
    console.log(typeof(req.body.stepNumber));
    db.run(`INSERT INTO Steps VALUES(NULL, $date, $steps);`, {
          $date: req.body.stepDate,
          $steps: +req.body.stepNumber
      }, function (err) {
        if (err) throw err;
        console.log('last ID', this.lastID);
        res.send('SAVED STEPS!');
      });
  },

  // // show note
  // show (req, res) {
  //   res.render('show-note', {
  //     note: req.note
  //   });
  // },

  // delete note
  destroy (req, res) {
    db.run(`DELETE FROM Steps WHERE StepID = $id;`, {
      $id: +req.params.id
    }, function (err) {
      if (err) throw err;
      res.redirect('/steps')
    });
  },

  // edit note
  edit (req, res) {
    db.get(`SELECT * FROM Steps WHERE StepID = $id`, {
        $id: req.params.id
      }, function (err, step) {
        res.render('edit-step', {
          step: step
        });
      });
  },

  // update note
  update (req, res) {
    console.log(typeof(req.params.id));
    db.run(`UPDATE Steps SET Steps_date = $date, Steps_number = $steps WHERE StepID = $id;`, {
          $date: req.body.stepDate,
          $steps: +req.body.stepNumber,
          $id: +req.params.id
      }, function (err) {
        console.log('UPDATED', this.changes);
        res.redirect('/steps');
      });
  }
};
