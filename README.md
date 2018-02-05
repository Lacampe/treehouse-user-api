### Clone the repository
```
$ git clone https://github.com/Lacampe/treehouse-user-api.git
```

### Run the app.js file with x number of arguments
```
$ node app.js romaincampech2
```

### Get more data
```javascript
getProfile(username) {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
    // ...
    response.on('end', () => {
      // print out the entire json response to see what data you want to access
      const profile = JSON.parse(body)
      console.dir(profile)
      // change the template literals & arguements in the printMessage function and call it accordingly, e.g.:
      profile.courses.forEach((course) => {
        printMessage(course.title, course.badge_count)
      })
    })
  })
}
```
