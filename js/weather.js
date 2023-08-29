// 1° obter a chave da API (APIKEY)
// 2° obter informações da cidade(locations API e fazer request para city search)
// 3° obter o clima atual da cidade

const APIKey = '8GLre4GS7xEu6zhEKNfLruIAJPwmcCDo'
const baseUrl = 'https://dataservice.accuweather.com/'

const getCityUrl =  cityName => 
`${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`


const getWeatherUrl = cityKey => 
    `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
    try {
        const response =  await fetch(url)
     if(!response.ok){
        throw new Error('Não foi possível obter os dados')
     }
     return await response.json()

    }catch ({name, message}) {
        alert(`${name}: ${message}`)
    }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))

const getCityWeather =  cityKey => fetchData(getWeatherUrl(cityKey))



