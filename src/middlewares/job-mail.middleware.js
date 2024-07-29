// 1. import nodemailer
import  nodemailer from'nodemailer';

// 2. Configure email and send it.

async function sendMail(userEmail,subject,data) {

    // 1. Create an email transporter.
    // SMTP (Simple Mail Transfer Protocol)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rajkaran541@gmail.com',
            pass:'gycvlvfhclsniegd'
        }
    });

    //2. Configure email content
    const mailOptions = {
        from: 'rajkaran541@gmail.com',
        to: userEmail,
        subject: subject,
        html: data,
    };

    // 3. Send the email
    try {
        await transporter.sendMail(mailOptions);
        return true;
    } catch (err) {
        return err;
    }
}
export default sendMail;