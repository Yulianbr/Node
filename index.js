const express =  require('express')
const app = express()
const port = 3000
const path = require('path')

//middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
