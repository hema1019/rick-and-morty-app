
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getRamdomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'


function App() {

 const [location, setLocation] = useState()
 const [idLocation, setIdLocation] = useState(getRamdomNumber(126))
 const [hasError, setHasError] = useState(false)
 const [isLoading, setIsLoading] = useState(true)
 
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    setIsLoading(true)
    axios.get(url)
      .then(res => {
        setLocation(res.data)
        setHasError(false)
      })
      .catch(err => {
        console.error(err)
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [idLocation])



  return (
  <div>
    <img className="headerImg" src="/img/rick-and-morty.png" alt="" />
    <FormLocation 
    setIdLocation = {setIdLocation} 
    />
    {
      isLoading
      ? (<span className="loader"></span>)
      : (
        hasError
        ? (<h1 className='msgError'> ❌Hey! You must provide an id from 1 to 126 😥</h1>)
        : (
          <>
          <LocationInfo 
          location={location}
        />

        <div className='resident-container'>
          {
          location?.residents.map(url => (
            <ResidentCard 
              key={url}
              url={url}
            />
          ))
          }
        </div>
        
        </>
      )

      )
    }
   
  </div>
  )
}

export default App
