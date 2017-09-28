const fs = require('fs');
const qs = require('querystring');
const http = require('http');
const https = require('https');

const githubServer = http.createServer((req, res) => {
  if (req.method === "POST") {
    let collectedData = "";

    req.on("data", datum => {
      collectedData += datum;
    })

    req.on("end", () => {
      const username = qs.parse(collectedData).username
      res.end(username)
    })
  }
})

githubServer.listen(8080, () => { console.log(`I'm listening on port 8080!`);})
