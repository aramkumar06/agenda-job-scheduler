/* eslint-disable no-console */
const sendWelcomeEmails = (job, done) => {
  console.log('Sending welcome emails..');

  setTimeout(() => {
    console.log('Welcome emails were sent.');
    done();
  }, 1000);
};
/* eslint-enable no-console */

module.exports = sendWelcomeEmails;
