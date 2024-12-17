import weatherImg from '../src/assets/weatherImg.svg'
import { GoSearch } from "react-icons/go";

const WeatherCard = ({destName}) => {
    return (
        <div className="flex my-4">
            <div className=''>
                <h1 className='font-bold'>Best time to visit {destName}</h1>
                <p className='text-gray-400'>Visit in the off-peak season (November to March) to avoid the crowds and get the best deals on flights and accommodation.</p>
                <button className='p-2 bg-green-800 text-black mt-4  rounded-lg'>Learn More</button>
            </div>
            <div className='my-2'>
                <img src={weatherImg} alt="" className='border rounded-lg' />
            </div>
        </div>
    )
}

export default WeatherCard