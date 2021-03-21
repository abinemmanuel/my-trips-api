'use strict'
const { handler } = require('./getTrips')
const transform = require('../../../common/queryTransform')
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

    it('Should return list of trips with filter applied', async () => {
        
        const event = {
            multiValueQueryStringParameters:{
                filter: ['status~COMPLETED','commute~ROAD']
            }
        }
        const transformed = transform.applyTransform(event.multiValueQueryStringParameters,sampleTrips)
        const expectedTrips =  transformed.map(({id,name,status}) => ({id,name,status}))
        const response = await handler(event)
        expect(response.statusCode).toBe(200)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
        expect(JSON.parse(response.body)).toEqual(expectedTrips)
    })

    it('Should return list of trips with sort applied', async () => {
        
        const event = {
            multiValueQueryStringParameters:{
                sortAsc: ['commute'],
                sortDesc: ['name']
            }
        }
        const transformed = transform.applyTransform(event.multiValueQueryStringParameters,sampleTrips)
        const expectedTrips =  transformed.map(({id,name,status}) => ({id,name,status}))
        const response = await handler(event)
        expect(response.statusCode).toBe(200)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
        expect(JSON.parse(response.body)).toEqual(expectedTrips)
    })

})
