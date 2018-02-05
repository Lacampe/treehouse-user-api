// function printing a message based on 3 arguments
printMessage = (name, badgeCount, points) => {
  const message = `${name} has ${badgeCount} total bage(s) and ${points} points in Javascript.`
  console.log(message)
}

printErrorMessage = (error) => {
  console.error(error.message)
}

// import 'http(s)' module
const https = require('https')
const http = require('http')

// function fetching user info from Teamtreehouse's API base on username argument
getProfile = (username) => {
  try {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
                        if (response.statusCode === 200) {
                          let body = ''

                          // non-blocking concatenation of data in body variable (String)
                          response.on('data', (data) => {
                            body += data.toString()
                          })

                          // when the response is complete...
                          response.on('end', () => {
                            try {
                              // parsing string into JS Object + calling printMessage function
                              const profile = JSON.parse(body)
                              printMessage(profile.name, profile.badges.length, profile.points.JavaScript)
                            } catch (error) {
                              printErrorMessage(error)
                            }
                          })
                        } else {
                          const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`
                          const statusCodeError = new Error(message)
                          printErrorMessage(error)
                        }

                    })

    request.on('error', (error) => {
      printErrorMessage(error)
    })
  } catch (error) {
    printErrorMessage(error)
  }
}

// exporting the getProfile function and make it available as 'get'
module.exports.get = getProfile
