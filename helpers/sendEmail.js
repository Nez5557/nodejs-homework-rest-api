  const nodemailer = require('nodemailer')
  require('dotenv').config()
 const { EMAIL_PASSWORD } = process.env

  const nodemailerConfig = {
    host: 'smtp.rambler.ru',
    port: 465, // 25, 465, 2255 нужно убедится в правильности
    secure: true,
    auth: {
      user: 'ez53@rambler.ru',
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
//    const email = {
//      ...data,
//      from: 'ez53@rambler.ru'
//    }

//    await sgMail.send(email)
//   }

// module.exports = sendEmail
