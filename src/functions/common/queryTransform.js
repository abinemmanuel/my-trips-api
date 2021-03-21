'use strict'

module.exports.applyTransform = (queryParams,results) => {

    // Destructuring Query Params
    const {filter,sortAsc,sortDesc} = queryParams || {}

    // extracting filter parameter name and value
    const queryFilter = (filter) ? filter.map(param => (param.split('~'))) : []

    // Iteratings through filters and applying them to the results in the order
    queryFilter.forEach( query => {
        results = results.filter( trip => (trip[query[0]] === query[1]))
    })
    // sorting in descending order from the last to first criteria
    if (sortDesc) {
        sortDesc.reverse().forEach(param => results.sort((a, b) => (a[param] > b[param]) ? -1 : 1))
    }
    // sorting in ascending order from the last to first criteria
    if (sortAsc) {
        sortAsc.reverse().forEach(param => results.sort((a, b) => (a[param] > b[param]) ? 1 : -1))
    }
    return results
}
