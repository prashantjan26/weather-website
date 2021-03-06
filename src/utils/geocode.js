const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHJhc2hhbnRqYW4yNiIsImEiOiJja3Z1bWF0a3QxMnRwMndtOWVvZ2Y1OGsxIn0.LRuBDnuBSqLaJvtapPZfZg'
    request({url, json: true}, (error,{body} = {}) => {
        if(error) {
            callback('unable to connect to weather service',undefined)
        }
        else if(body.features.length === 0) {
            callback('Location not found! Try another',undefined)
        }
        else{
            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode