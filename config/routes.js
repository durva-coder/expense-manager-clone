/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const UserController = require("../api/controllers/UserController");

module.exports.routes = {

  // User Controllers
  // 'GET /': {view: 'pages/homepage'},

  // login Page --> Home Page
  'GET /login' : UserController.loginPage,

  // signup Page
  'GET /signup': UserController.signupPage,

  // signup concept
  'POST /signup': 'UserController.signup',

  // login concept
  'POST /login': 'UserController.login',

  // logout concept
  '/logout': 'UserController.logout',

  // add user concept
  'POST /add/:_id': 'UserController.add',

  // add user Page
  'GET /addUser/:_id': 'UserController.addUser',

  // view user Page
  'GET /viewUsers/:_id': 'UserController.viewUsers',

  // verify Mail Page
  'GET /verifyMail': 'UserController.verifyMail',

  // verify otp
  'POST /verify': 'UserController.verify',
  
  // view profile of user
  'GET /viewProfile/:_id': 'UserController.viewProfile',

  // update profile of user
  'GET /updateProfile/:_id': 'UserController.updateProfile',

  // update profile concept
  'PUT /updatePro/:_id' : 'UserController.updatePro',

  // forgot passowrd page
  'GET /email': UserController.email,
  
  // forgot password concept
  'POST /getEmail': UserController.getEmail,

  // 'GET /resetPassword': UserController.resetPassword,

  // 'POST /reset' : UserController.reset,

 



  // Account Controller

  // dashboard Page
  'GET /dashboard/:_id': 'AccountController.dashboard',

  // add account concept
  'POST /createAccount' : 'AccountController.create',

  // add account Page
  'GET /addAccount': 'AccountController.addAccount',

  // delete account concept
  'DELETE /deleteAccount/:_id' : 'AccountController.deleteAccount',

  // update account Page
  'GET /updateAccount/:_id': 'AccountController.updateAccount',

  // update account concept
  'PUT /update/:_id' : 'AccountController.update',



  // Transaction Controller

  // add transaction Page
  'GET /addTransaction/:_id' : 'TransactionController.addTransaction',

  // view transaction Page
  'GET /viewTransaction/:_id' : 'TransactionController.viewTransaction',

  // add transaction concept
  'POST /addTransact/:_id' : 'TransactionController.addTransact',

  // delete transaction concept
  'DELETE /deleteTransaction/:_id' : 'TransactionController.deleteTransaction',

  // update transaction Page
  'GET /updateTransaction/:_id' : 'TransactionController.updateTransaction',

  // update transaction concept
  'PUT /updateTransact/:_id' : 'TransactionController.updateTransact',

  'GET /viewgraph/:_id' : 'TransactionController.viewgraph',

  'GET /downloadPdf/:_id' : 'TransactionController.downloadPdf',

};
