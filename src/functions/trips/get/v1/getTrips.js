'use strict'

const response = require('../../../common/jsonResponse')
const queryTransform = require('../../../common/queryTransform')
const trips = require('../../../../../resources/sampleTrips.json')


/**
 * 
 * @param {*} event Http event
 * @returns [{ id, name, status }]  List of trips
 */
module.exports.handler =  async event => {
    const {ok, unavailableError, serverError} = response
    const {applyTransform} = queryTransform
    try { 
        // get the result transformed as per URL query parameters
        const transformed = applyTransform(event.multiValueQueryStringParameters, trips)

        // TODO: implement support for `start` and `count` parameter along with integrating to datastore.

        // extracting only basic info needed in the trip list for response
        const response = transformed.map(({id,name,status}) => ({id,name,status}))
        if(response.length === 0) {
            return unavailableError()
        }
        return ok(response)
    } catch (error) {
        console.log(__filename, error, event)
        return serverError(error)
    }
}
