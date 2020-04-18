const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    if (!direccion) {
        throw new Error('El campo cadena es obligatorio');
    }

    const encodeUrl = encodeURI(direccion);
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '3d296979c8mshffc7f64e8ccdcf4p1c55d5jsn1ce6fa63bdbc'
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultado para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const direc = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direc,
        latitud,
        longitud
    }

}

module.exports = {
    getLugarLatLng
}