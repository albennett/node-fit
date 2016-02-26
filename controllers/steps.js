'use strict'

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/node-fit.sqlite');

module.exports = {
  // get all notes
  index (req, res) {
    res.render('index');
  }

  // new note form
  // newStep (req, res) {
  //   Category.find({}, (err, categories) => {
  //     if (err) throw err;

  //     res.render('new-note', {
  //       title: 'New Note',
  //       categories: categories
  //     });
  //   });
  // },

  // // show note
  // show (req, res) {
  //   res.render('show-note', {
  //     note: req.note
  //   });
  // },

  // // create note
  // create (req, res) {
  //   Note.create(req.body, (err, note) => {
  //     if (err) throw err;
  //     console.log('note: ', note);
  //     res.redirect(`/notes/${note._id}`);
  //   });
  // },

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
