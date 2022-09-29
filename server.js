import express from 'express'
import {router} from "./routes.js";

const app = express()

app.use('/',router)


app.listen(3000,'0.0.0.0',()=>{
    console.log('listen in 3000 port')
})

export {
    app
}