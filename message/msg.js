const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

exports.sendEmail = functions.https.onCall(async (data, context) => {
    const { message } = data;

    try {
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
            subject: 'Mentoring Request',
            text: message
        };

        await transporter.sendMail(mailOptions);
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new functions.https.HttpsError('internal', 'Error sending email');
    }
});
