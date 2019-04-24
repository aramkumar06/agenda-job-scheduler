const { agenda } = require('../services');

const jobResolver = {
  createJob: async ({ name, repeatInterval, data }) => {
    const job = agenda.create(name, data).repeatEvery(repeatInterval);
    await job.save();
    return job.attrs;
  },

  getJobs: async () => {
    const jobs = await agenda.jobs({});
    return jobs.map(job => job.attrs);
  },
};

module.exports = jobResolver;
