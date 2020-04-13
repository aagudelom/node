const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e80dc4f01e11a4ea341635502e7aa737&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}