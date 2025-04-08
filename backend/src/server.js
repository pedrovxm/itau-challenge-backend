import express  from "express"
import { config } from "./config/config.js"
import { connectDB } from "./tools/databaseConnection.js"
import { transactionRouter } from "./routes/transactionRoute.js"


const app = express()

app.use(express.json())
app.use(transactionRouter)

connectDB()

app.listen(config.PORT,()=>{
    console.log(`Server is running in PORT: ${config.PORT}`)
})
