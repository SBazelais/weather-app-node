const request = require('request');

const weatherData = (latitude, longitude, callback)=>{

    const url =`http://api.weatherstack.com/current?access_key=5b82889ca352f5c23fcefd1ea99080e6&query=${latitude},${longitude}&units=f`;
   
    request({url:url, json: true}, (err, res)=>{

        const data = res.body.current

        if(err){
            callback('Unable to locate web service', undefined)
        }else if(res.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, `It is currently ${data.temperature} degrees outside, ${data.weather_descriptions}. Feels like ${data.feelslike} degrees`)
        }
    })
}

module.exports = weatherData;

