const nodemailer = require('nodemailer');

module.exports = {


  friendlyName: 'Welcome message',


  description: 'Return a personalized greeting based on the provided email.',


  inputs: {
    email: {
      description: 'The email address of the recipient.',
      example: 'mikemcneil@example.com',
      required: true,
      isEmail: true,
    },
    password: {
      type: 'string',
      required: true,
    },

  },


  exits: {

    success: {
      description: 'send mail successfully',
    },

  },

// using nodemailer for sending welcome mail to user
  fn: async function (inputs, exits) {

    var otp = Math.random();
    otp = otp * 1000000;
    otp = parseInt(otp);
    console.log(otp);

    console.log('fdf',inputs);
    console.log(`${inputs.email}`);

    // getting current email and password after signup
    User.find({
      email: `${inputs.email}`,
      password: `${inputs.password}`
    }, function(err, user){
      if(err) return err;

      else{
        // used mailTrap 
        let transport = nodemailer.createTransport({
          // host: 'gmail',
          // port: 465,
          service: 'gmail',
          // secure: false,
          
          auth: {
              user: 'durvarbanthia@gmail.com',
              pass: 'qwbyprqkgyjtdmds'
          },
       });

       const mailOptions = {
          from: 'durvarbanthia@gmail.com', // Sender address
          to: `${inputs.email}`, // List of recipients
          subject: 'Welcome Message', // Subject line
          html: '<h2 style="color:#ff6600;">Hello People!, Welcome to Expense Manager!</h2> Your Verify OTP is:' + otp
        };
    
        transport.sendMail(mailOptions, function(err, info) {
          if (err) {
            console.log(err)
          } else {
            console.log(info);
          }
        })

      }
    })

    return exits.success(otp);
  }


};


