import supertest from 'supertest'
import {server} from './server';

const request = supertest(server)


describe('/test endpoint',()=>{
    it('should return response',async ()=>{
        const response = await request.get('/test')
        expect(response.status).toBe(200)
        expect(response.text).toBe('Hello World')

    })
    afterAll(()=>{
        server.close()
    })
})

