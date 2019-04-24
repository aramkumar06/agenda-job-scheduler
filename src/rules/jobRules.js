const cronParser = require('cron-parser');
const { body } = require('express-validator/check');
const { jobTypes } = require('../constants');

const nameRule = body('name')
  .isIn(jobTypes.JOB_TYPES)
  .withMessage(`Must be one of ${jobTypes.JOB_TYPES}`);

const frequencyRule = body('frequency').custom(async frequency => {
  try {
    cronParser.parseExpression(frequency);
    return Promise.resolve(true);
  } catch (error) {
    return Promise.reject(new Error('Frequency must be in a valid format.'));
  }
});

module.exports = {
  create: [nameRule, frequencyRule],
};
