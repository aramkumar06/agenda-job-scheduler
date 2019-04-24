const { agenda } = require('../services');

exports.create = async (req, res) => {
  const { name, frequency, data } = req.body;

  const job = agenda.create(name, data).repeatEvery(frequency);
  await job.save();

  res.json(job);
};

exports.findAll = async (req, res) => {
  const jobs = await agenda.jobs({});
  res.json(jobs);
};
