//npm init
//npm i axios
const argv = require('yargs').options({
    direccion: {
        demand: true,
        alias: 'd',
        desc: 'Dirección de la ciudad'
    }
}).argv;
const axios = require('axios');

const encodeUrl = encodeURI(argv.direccion);
console.log(encodeUrl);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    timeout: 1000,
    headers: {
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key': '3d296979c8mshffc7f64e8ccdcf4p1c55d5jsn1ce6fa63bdbc'
    }
});

instance.get()
    .then(resp => {
        console.log(resp.data.Results[0]);
    }).catch(err => {
        console.log(err);
    })