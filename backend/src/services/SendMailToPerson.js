const email = require('../../config/email')

module.exports = async (person, friend) => {
  try {
    await email.sendEmail(person.email, 'You are choosed', `You is from ${friend.name} at ${friend.email}`)
    await email.sendEmail(friend.email, 'You are choosed', `You is from ${person.name} at ${person.email}`)
    console.log(`Email sent to ${person.email} and ${friend.email}`)
  } catch (error) {
    console.warn(error)
  }
}
