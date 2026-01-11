// utils/sendEmail.js
import transporter from "./mailer.js";

export const sendEmail = async ({ to, subject, html }) => {
  return await transporter.sendMail({
    from: `"Accelon Health" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
};