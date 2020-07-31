const express = require('express')
const app = express()
const compression = require('compression')
// const path = require('path')


// app.use(express.static(path.join(__dirname, '../public')))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
// }) // Send index.html for any other requests
app.use(compression())

const root = require('path').join(__dirname, '../')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})


module.exports = app;
