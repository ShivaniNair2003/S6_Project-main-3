const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onRequest((req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com', // Your Gmail address
      pass: 'your-email-password' // Your Gmail password or App Password if 2-Step Verification is enabled
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com', // Recipient's email address
    subject: 'Test Email',
    text: 'This is a test email sent from Firebase Cloud Functions.'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});
