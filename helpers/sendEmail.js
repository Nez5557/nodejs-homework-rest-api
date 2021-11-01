const nodemailer = require('nodemailer')
require('dotenv').config()
const { EMAIL_PASSWORD } = process.env

const nodemailerConfig = {
  host: 'smtp.mail.ru',
  port: 465, // 25, 465, 2255 нужно убедится в правильности
  secure: true,
  auth: {
    user: 'Nez...5@mail.ru',
    pass: EMAIL_PASSWORD,
  },
}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendEmail = async data => {
  try {
    const email = { ...data, from: nodemailerConfig.auth.user }
    await transporter.sendEmail(email)
  } catch (error) {
    console.log(error)
  }
}

module.exports = sendEmail

// const { SENDGRID_KEY } = process.env

// sgMail.setApiKey(SENDGRID_KEY)

// const sendEmail = async(data) => {
//   const email = {
//     ...data,
//     from: 'Nez5557@3g.ua'
//   }

//   await sgMail.send(email)
// }

// module.exports = sendEmail