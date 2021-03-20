'use strict'
const { handler } = require('./getTrips')
const sampleTrips = require('../../../../../resources/sampleTrips.json')

describe('When invoking getTrips function', () => {
    
    it('Should return list of trips', async () => {
        
        const event = {}
        const expectedTrips =  sampleTrips.map(({id,name,status}) => ({id,name,status}))
        const response = await handler(event)
        expect(response.statusCode).toBe(200)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
        expect(JSON.parse(response.body)).toEqual(expectedTrips)
    })

})
