import {useEffect,useState} from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'

interface CityWeatherProps {
    search:string
}



const CityWeather = ({search}:CityWeatherProps) => {

    const [weatherData, setWeatherData] = useState({})

    useEffect(()=>{
        const fetchData = async () => {
            try {
                let response =await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=a3905cab6536dfd90cf6041514f46eff`)
                let data =await response.json()
                setWeatherData(data.main.temp)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        } 
        fetchData()
    },[])

    const kelvinToFarenheit = (k: any) => {
        return (k - 273.15).toFixed(2);
      };

    return(
        <div className='mt-5'>
            <h2>
                {search} City Weather
                {console.log(weatherData)}
            </h2>
            <TiWeatherPartlySunny/>
            <h4>
                {weatherData && kelvinToFarenheit(weatherData)} C
            </h4>
        </div>
    )

}

export default CityWeather