import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, lang = 'en' } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const emailLabels = {
      ua: { title: 'Нове повідомлення', from: 'Відправник', message: 'Повідомлення', footer: 'Цей лист було автоматично згенеровано з вашого сайту-портфоліо.' },
      en: { title: 'New Message', from: 'Sender', message: 'Message', footer: 'This email was automatically generated from your portfolio website.' }
    };
    const t = emailLabels[lang] || emailLabels.en;

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `${t.title} від ${name}`,
      html: `
        <div style="background-color: #f4f7f6; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
          <div style="max-width: 500px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #007bff 0%, #0056b3 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">${t.title}</h1>
              <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0 0;">Контактна форма портфоліо</p>
            </div>
            <div style="padding: 30px;">
              <div style="margin-bottom: 25px;">
                <label style="display: block; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">${t.from}</label>
                <div style="font-size: 16px; color: #333; font-weight: bold;">${name}</div>
                <div style="font-size: 14px;"><a href="mailto:${email}" style="color: #007bff; text-decoration: none;">${email}</a></div>
              </div>
              <div style="margin-bottom: 5px;">
                <label style="display: block; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;">${t.message}</label>
                <div style="background-color: #f8faff; padding: 20px; border-radius: 12px; color: #444; line-height: 1.6; border: 1px solid #edf2f7; white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div style="background-color: #fafbfc; padding: 20px; text-align: center; border-top: 1px solid #edf2f7;">
              <p style="margin: 0; color: #a0aec0; font-size: 12px;">${t.footer}</p>
            </div>
          </div>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    const errorMsg = lang === 'ua' ? 'Помилка відправки' : 'Failed to send message';
    res.status(500).json({ error: errorMsg });
  }
}
