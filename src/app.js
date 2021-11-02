const  express = require("express")
const dotenv = require("dotenv")

const conn = require("./db/connection")
const route = require("./routes/routes")
const app = express()

dotenv.config()
conn()

const port = process.env.PORT;

app.use(route)

app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})