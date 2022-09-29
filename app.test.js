import supertest from 'supertest'
import {app} from "./server.js";

const request = supertest(app)

describe('/test endpoint',()=>{
    it('should return response',async()=>{
        const response = await request.get('/test')
        expect(response.status).toBe(200)
        expect(response.text).toBe('Hello World')
    })
})