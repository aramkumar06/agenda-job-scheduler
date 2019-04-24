/* eslint-disable no-console */
const sendInvoices = (job, done) => {
  console.log('Sending invoices..');

  setTimeout(() => {
    console.log('Invoices were sent.');
    done();
  }, 1000);
};
/* eslint-enable no-console */

module.exports = sendInvoices;
