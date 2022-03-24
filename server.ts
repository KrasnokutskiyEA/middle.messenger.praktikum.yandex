require('dotenv').config()

const express = require('express')
const history = require('connect-history-api-fallback')

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(history())
app.use(express.static('dist'))

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`))
