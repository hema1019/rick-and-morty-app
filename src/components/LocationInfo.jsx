
import './styles/LocationInfo.css'

const LocationInfo = ( {location} ) => {

  return (
   <article className="location">
    <h2 className="location__title" >{ location?.name }</h2>
    <ul className="location__list">
        <li className="location__item-type">
          <span className="location__label">Type:</span>
          <span className="location__item-value">{location?.type}</span>
          </li>
        <li className="location__item-dimention">
          <span className="location__label">Dimention:</span>
          <span className="location__item-value">{location?.dimension}</span>
          </li>
        <li className="location__item-population">
          <span className="location__label">Population:</span>
          <span className="location__item-value">{location?.residents.lenght}</span>
          </li>
    </ul>
   </article>
  )
}

export default LocationInfo