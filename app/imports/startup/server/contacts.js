import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Charles',
    last: 'Pak',
    address: '1326 Keeaumoku st #802',
    telephone: '808-397-7160',
    email: 'pakchar@hawaii.edu',
  },
  {
    first: 'Philip',
    last: 'Johnson',
    address: '1680 East-West Rd., Honolulu, HI',
    telephone: '808-956-3489',
    email: 'johnson@hawaii.edu',
  },
  {
    first: 'Henri',
    last: 'Casanova',
    address: '1680 East-West Rd., Honolulu, HI',
    telephone: '808-956-2649',
    email: 'henric@hawaii.edu',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
