// routes/contact.js
import { sendEmail } from '../utils/sendMails.js';
import express       from 'express';
const router = express.Router();

router.post("/send-email", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await sendEmail({
      to: process.env.TO_EMAIL,
      subject: "New Request",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

export default router;
