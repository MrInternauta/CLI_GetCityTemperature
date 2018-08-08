const axios = require('axios')
let getweater = async(lat, lng) => {
    let key = '6850cfddfsfdsfdsfsdsdffdsdsfds' //Ingresa tu key
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${key}`
    let response = await axios.get(url)
    let temp = (response.data.main.temp)
    return temp
}
module.exports = {
    getweater
}