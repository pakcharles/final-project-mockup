import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/login', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/my-clubs', {
  name: 'My_Clubs_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'My_Clubs_Page' });
  },
});

FlowRouter.route('/manage-clubs', {
  name: 'Manage_Clubs_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Manage_Clubs_Page' });
  },
});

FlowRouter.route('/search', {
  name: 'Search_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Search_Page' });
  },
});

FlowRouter.route('/contact-us', {
  name: 'Add_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Add_Contact_Page' });
  },
});

FlowRouter.route('/edit-contact/:_id', {
  name: 'Edit_Contact_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Edit_Contact_Page' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_Body', { main: 'App_Not_Found' });
  },
};
