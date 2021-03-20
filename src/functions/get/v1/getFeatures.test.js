'use strict'
const fs = require('fs')
const { handler } = require('./getFeatures')

describe('When invoking getFeatures function', () => {
    // TODO: Add lifecycle methods if needed
    
    it('Should return features file content', async () => {
        
        const event = {}
        const expected = fs.readFileSync('docs/features.md').toString()
        const response = await handler(event)
        expect(response.statusCode).toBe(200)
        expect(response.headers).toBeTruthy()
        expect(response.body).toBeTruthy()
        expect(JSON.parse(response.body)).toEqual(expected)
    })


    it('Should fail with dependency error', async () => {
        // Mocking dependency module fs to test error scenarios
        jest.spyOn(fs, 'readFileSync').mockImplementation(() => {
            throw new Error('Custom Error')
        })
        
        const event = {}
        const response = await handler(event)
        expect(response.statusCode).toBe(500)
        expect(response.headers).toBeTruthy()
    })
})

