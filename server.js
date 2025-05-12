const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const cors = require('cors');
const translations = require('./server/translations.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP error:', error);
  } else {
    console.log('SMTP connected ✅');
  }
});

// Routes
app.post('/send', async (req, res) => {
  const { name, email, message, lang = 'en' } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: translations[lang]?.fieldRequred || 'All fields are required',
    });
  }

  try {
    await transporter.sendMail({
      from: `З сайту Портфоліо "${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Повідомлення з портфоліо від ${name}`,
      text: message,
      html: `
        <h3>Нове повідомлення</h3>
        <p><strong>Ім’я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Повідомлення:</strong><br/>${message}</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: translations[lang]?.messageTrue || 'Message sent successfully',
    });
  } catch (error) {
    console.error('SendMail error:', error);
    res.status(500).json({
      success: false,
      message: translations[lang]?.messageFalse || 'Failed to send message',
    });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
