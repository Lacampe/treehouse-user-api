// importing available function from profile.js
const profile = require('./profile')

// users array = arguments passes on the command line after running node *filename.js* (starting at index 2)
const users = process.argv.slice(2)

// calling getProfile with each item of users array as argument
users.forEach((username) => {
  profile.get(username)
})
