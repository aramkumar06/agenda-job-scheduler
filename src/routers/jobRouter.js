const express = require('express');
const { asyncMiddleware, validatorMiddleware } = require('../middlewares');
const { jobRules } = require('../rules');
const { jobController } = require('../controllers');

const router = express.Router();

router.post(
  '/jobs',
  jobRules.create,
  validatorMiddleware,
  asyncMiddleware(jobController.create),
);

router.get('/jobs', asyncMiddleware(jobController.findAll));

module.exports = router;
