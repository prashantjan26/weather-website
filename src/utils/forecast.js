const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59d5afe5b54bbaadf6822d01fe18931b&query=' + latitude + ',' + longitude
    request({url, json: true},(error,{body}) => {
        if(error) {
            callback('Low level error',undefined)
        }
        else if(body.error) {
            callback('Coordinate error',undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature +" degrees out. It feels like " + body.current.feelslike +" degrees out.")
        }
    })
}

module.exports = forecast