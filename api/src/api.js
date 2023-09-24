const express  = require('express')
const cookieParser = require('cookie-parser')

const v1UserRouter = require('./v1/routes/userRoutes')
const v1IndexRouter = require('./v1/routes/index')

const PORT = 3000

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use('/api/v1', v1IndexRouter)
app.use('/api/v1/users', v1UserRouter)

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT} ...`)
})


