const express = require('express')
const corsProxy = require('@isomorphic-git/cors-proxy/middleware.js')

const app = express()
const port = 3000
const options = {}

app.use(corsProxy(options))

app.get("/", (req, res) => {
  res.send("Isomorphic-Git CORS proxy")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
