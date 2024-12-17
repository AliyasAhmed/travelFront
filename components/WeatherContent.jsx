import React, { useEffect, useState } from 'react'
import WeatherCard from '../components/WeatherCard'
import gsap from 'gsap'

const WeatherContent = () => {
    // useState declaration
    const [weatherArray, setWeatherArray] = useState([])
    const [weatherValue, setWeatherValue] = useState("")

    // function to handle input change

    const handleInput = (e) => {
        setWeatherValue(e.target.value)
    }

    // function to add values to state array
    const addWeather = () => {
        setWeatherArray((weatherArray) => [...weatherArray, weatherValue.trim()])
        setWeatherValue("")
    }

    useEffect(() => { gsap.fromTo('.weatherSection', { opacity: 0 }, { opacity: 1, duration: 1, delay: .5 }) }, [])



    return (
        <section className="max-w-full h-screen weatherSection">
            <div className="m-3 p-2 ">
                <h1 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6]'>Local Recommendation</h1>
                <p className='text-gray-400'>Based on your travel plans</p>
                <div className='mx-auto p-3 bg-black my-2 border rounded-xl border-black'>
                    <input type="text" name="" id="" className='w-full border rounded-lg h-[50px] text-black' placeholder={`Enter Location For Weather Insights`} value={weatherValue} onChange={handleInput} />
                    <div className="">
                        <button className="btn" onClick={addWeather}>Search</button>
                    </div>

                    <div>
                        {weatherArray.map((v,i)=>{
                            return <WeatherCard  destName={v}/>
                        })}
                        
                    </div>


                </div>
            </div>
        </section>
    )
}

export default WeatherContent

