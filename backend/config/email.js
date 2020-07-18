const mailgun = require('mailgun.js')

module.exports = {
  $instance: {},
  setupMailClient () {
    this.$instance = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    })
    return this.$instance
  },
  sendEmail (to, subject, text) {
    return this.$instance.messages.create(to, {
      from: process.env.MAILGUN_FROM_EMAIL,
      to,
      subject,
      message: text
    })
  }
}
