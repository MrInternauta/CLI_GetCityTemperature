const CONFIG = require('./config/config')
let getinfor = async() => {
    try {
        let coord = await CONFIG.LUGAR(CONFIG.ARGV)
        let temp = await CONFIG.TEMP(coord.lat, coord.lng)
        return (`El clima en ${coord.direccion} es: ${temp}c`);
    } catch (e) {
        return "No se pudo determinar el clima"
    }
}
getinfor()
    .then((mensaje) => console.log(mensaje))
    .catch((err) => console.log(err))