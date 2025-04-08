import dotenv from "dotenv"

dotenv.config()



const config = {
    PORT : process.env.PORT,
    mongoURL : process.env.MONGO_URI
}


export {config}