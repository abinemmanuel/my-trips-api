'use strict'
const { handler } = require('./getTripDetails')
const sampleTrips = require('../../../../../../resources/sampleTrips.json')

describe('When invoking getTripDetails function', () => {
    
    it('Should return trip matching the id', async () => {
        
        const event = {
            pathParameters: {
                id: '3'
            }
        }
        const expectedTrip =  sampleTrips.find(trip =>( trip.id === event.pathParameters.id.trim()))
        const response = await handler(event)
        expect(response.statusCode).toBe(200)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
        expect(JSON.parse(response.body)).toEqual(expectedTrip)
    })

    it('Should fail witherror for invalid id', async () => {
        
        const event = { }
        const response = await handler(event)
        expect(response.statusCode).toBe(400)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
    })

    it('Should fail witherror for invalid id', async () => {
        
        const event = {
            pathParameters: {
                id: 'TEST'
            }
        }
        const response = await handler(event)
        expect(response.statusCode).toBe(404)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
    })

})
