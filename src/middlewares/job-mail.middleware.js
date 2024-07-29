// 1. import nodemailer
import  nodemailer from'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// 2. Configure email and send it.

async function sendMail(userEmail,subject,data,logo) {

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
        attachments: [
            {
                filename: 'navIcon.png',
                path: path.resolve(__dirname, '..', '..',  'public','images','navIcon.png'),
                cid: 'companyLogo' // Content-ID
            }
        ]
    };

    // 3. Send the email
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log(result);
        return true;
    } catch (err) {
        console.log(err);
        return err;
    }
}
export default sendMail;