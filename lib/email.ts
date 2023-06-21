import nodemailer from "nodemailer"

interface EmailPayload {
  subject: string
  html: string
}

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "2525"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    to: process.env.SMTP_USER,
    ...data,
  })
}