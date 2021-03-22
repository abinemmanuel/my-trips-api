
const ok = data => {
    return json(200, data)
}

const okCreated = (data = undefined) => {
    return json(201, data)
}

const error = (data = 'Bad Request', code = 400) => {
    return json(code, data)
}

const authError = (data = 'Unauthorized') => {
    return json(401, data)
}

const unavailableError = (data = 'Not Found') => {
    return json(404, data)
}

const serverError = (data) => {
    return json(500, data)
}

const json = (statusCode, data, headers = {}) => {
    const response = {
        statusCode,
        headers: Object.assign({
            'Access-Control-Allow-Origin': '*', // For CORS support, consider tightening after clients are created
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'OPTIONS,PUT,GET,POST',
            'Content-Type': 'application/json'
        }, headers),
    }
    if (data) {
        response.body = (typeof data === 'string') ? data : JSON.stringify(data, null, 2)
    }
    console.log(response)
    return response
}

module.exports = {
    ok,
    okCreated,
    error,
    authError,
    unavailableError,
    serverError
}


