const express = require('express')
const app = express()
const routes = require('./Router')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT|| 3030, () => {
	console.log('servidor rodando')
})