'use strict';

const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/steps.js');

// GET all steps
router.get('/steps', ctrl.index);

// // POST new step
// router.post('/steps', ctrl.create);

// // GET new step form
// router.get('/steps/new', ctrl.newStep);

// //GET show step
// router.get('/steps/:id', ctrl.show);

// // DELETE step
// router.delete('/steps/:id', ctrl.destroy);

// // UPDATE step
// router.put('/steps/:id', ctrl.update);

// // EDIT step
// router.get('/steps/:id/edit', ctrl.edit);

module.exports = router;