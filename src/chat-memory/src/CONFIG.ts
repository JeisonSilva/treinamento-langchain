import dotenv from 'dotenv'
dotenv.config()

const CONFIG = {
    model: process.env.MODEL,
    temperature: Number(process.env.TEMPERATURE),
    OPEN_ROUTER_API_KEY: process.env.OPEN_ROUTER_API_KEY,
    OPEN_ROUTER_URI: process.env.OPEN_ROUTER_URI
}


export default CONFIG