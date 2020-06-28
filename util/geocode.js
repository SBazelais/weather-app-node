const request = require('request');

const geoCode = (location, callback)=> {
    const geoURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1Ijoic2JhemVsYWlzIiwiYSI6ImNrYmFyMjA2eDBrcXAycXBnNXprN3V5a3AifQ.1KE5O3lxjh5N-9BErQJ5Zw&limit=1`;

    request({url: geoURL, json: true}, (err, res)=>{
        data = res.body.features[0]
        if(err){
            callback('Unable to connect to web services', undefined)
        }else if (res.body.features.length === 0){
            callback('location is incorrect', undefined)
        } else {
            callback(undefined, {
                longitude: data.center[0],
                latitude: data.center[1],
                locationName: data.place_name
            })
        }
    })

}

module.exports = geoCode;