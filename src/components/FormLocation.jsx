import getRamdomNumber from "../utils/getRandomNumber"
import './styles/FormLocation.css'

const FormLocation = ({ setIdLocation }) => {

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.inputId.value.trim()
    if (inputValue === '' || inputValue === '0') {
      setIdLocation(getRamdomNumber(126))
    } else {
      setIdLocation(inputValue)  
    }
    e.target.inputId.value = ''
  }  

  return (
    <div className="inputCenter">
      <form onSubmit={handleSubmit}>
          <input id="inputId" style={{boxShadow: '1px 1px 10px'}} type="text" />
          <button style={{backgroundColor: 'green', color: 'white'}} >Search</button>
      </form>
    </div>
  )
}

export default FormLocation