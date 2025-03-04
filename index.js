// Taken as is from https://github.com/isomorphic-git/cors-proxy
const express = require('express')
const corsProxy = require('@isomorphic-git/cors-proxy/middleware.js')

const app = express()
const options = {}

app.use(corsProxy(options))


/*
const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Yo, Hello, World! I'm sooo express")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
*/
