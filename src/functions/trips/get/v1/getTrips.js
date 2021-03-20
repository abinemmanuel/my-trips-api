'use strict'

const response = require('../../../common/jsonResponse')
const trips = require('../../../../../resources/sampleTrips.json')
/**
 * 
 * @param {*} event Http event
 * @returns [{ id, name, status }]  List of trips
 */
module.exports.handler =  async event => {
    const {ok,serverError} = response
    try { 
        let response = trips.map(({id,name,status}) => ({id,name,status}))
        return ok(response)
    } catch (error) {
        console.log(__filename, error, event)
        return serverError(error)
    }
}
