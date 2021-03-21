'use strict'
const response = require('../../../../common/jsonResponse')
const trips = require('../../../../../../resources/sampleTrips.json')

module.exports.handler = async event => {
    const {ok,error,unavailableError,serverError} = response

    try {
        const {id} = event.pathParameters || {}

        // trip id missing in request
        if(!id) {
            return error()
        }

        // getting specific trip for response
        const tripDetails = trips.find(trip =>( trip.id === id.trim()))
        
        // no trip with given id
        if(!tripDetails) {
            return unavailableError()
        }

        return ok(tripDetails)
    } catch (error) {
        console.log(__filename, error, event)
        return serverError(error)
    }
}
