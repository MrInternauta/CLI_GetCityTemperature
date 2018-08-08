const axios = require('axios')
const getLugarLatLng = async(ARGV) => {
    let encodeurl = encodeURI(ARGV.direccion)
    let key = `AIzaSVXCXCVVSDSDSDFFDSSDFSDS` //Ingresa tu key
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeurl}&key=${key}`
    let response = await axios.get(url)
    if (response.data.status === "ZERO_RESULTS") {
        throw new Error('No se encontro esa Ciudad');
    } else {
        let direccion = response.data.results[0].formatted_address
        let lat = response.data.results[0].geometry.location.lat
        let lng = response.data.results[0].geometry.location.lng
        return {
            direccion,
            lat,
            lng
        }
    }
}
module.exports = {
    getLugarLatLng
}