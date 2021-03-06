'use strict'
const fs = require('fs')
const response = require('../../common/jsonResponse')

/**
 * 
 * @param {*} event Http event
 * @returns {String} Feature list
 */
module.exports.handler = async event => {
    console.log(event)
    const {ok, serverError} = response

    try {
        const data = fs.readFileSync('docs/features.md')
        return ok(data.toString())  
    } catch (error) {
        console.log(error)
        return serverError(error)
    }
}
