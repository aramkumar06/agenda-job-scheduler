/* eslint-disable no-console */
const scrapeWebsite = (job, done) => {
  console.log('Scraping website', job.attrs.data);

  setTimeout(() => {
    console.log('Finished scraping website');
    done();
  }, 1000);
};
/* eslint-enable no-console */

module.exports = scrapeWebsite;
