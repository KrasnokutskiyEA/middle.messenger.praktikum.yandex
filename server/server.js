require('dotenv').config()

const express = require('express')
const history = require('connect-history-api-fallback')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100 // Limit each IP to 100 requests per `window` (here, per 1 minute)
})

const PORT = process.env.PORT ?? 3000

const app = express()

app.use(limiter)
app.use(helmet.xssFilter())
app.use(history())
app.use(express.static('../dist'))

app.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}`))
