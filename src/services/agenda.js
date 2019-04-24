const Agenda = require('agenda');
const { databaseConfig, agendaConfig } = require('../config');
const { jobTypes } = require('../constants');
const {
  scrapeWebsite,
  sendWelcomeEmails,
  sendInvoices,
} = require('../handlers');

const agenda = new Agenda()
  .database(databaseConfig.connectionString, 'jobs', { useNewUrlParser: true })
  .processEvery(agendaConfig.processInterval);

agenda.define(jobTypes.SCRAPE_WEBSITE, scrapeWebsite);
agenda.define(jobTypes.SEND_WELCOME_EMAILS, sendWelcomeEmails);
agenda.define(jobTypes.SEND_INVOICES, sendInvoices);

module.exports = agenda;
