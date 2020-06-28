const geoCode = require('./util/geocode')
const weatherData = require('./util/forecast.js')

const location = process.argv[2]

if(!location){
    console.log('Please provide a location')
}else{

    geoCode(location, (err, {latitude, longitude, locationName}={})=>{

        if(err){
            return console.log(err);
        }
    
        weatherData(latitude, longitude, (err, forecastData)=>{
            if(err){
                return console.log(err)
            }
            console.log(locationName)
           console.log(forecastData)
        })
        
    })
}

