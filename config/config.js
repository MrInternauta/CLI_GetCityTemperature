const LUGAR = require('../lugar/lugar').getLugarLatLng
const TEMP = require('../temperatura/temperatura').getweater
const ARGV = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: "Direccion de la ciudad",
        demand: true
    }
}).argv;

module.exports = {
    ARGV,
    LUGAR,
    TEMP
}