
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT

// handle json requests
app.use(express.json())

// handle cross origins calls
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})