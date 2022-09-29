import {Router} from "express";


const router = Router()


router.get('/test',(req,res)=>{
    res.status(200).send('Hello World')
})


export {
    router
}