import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import CityWeather from './CityWeather'
import {RouteComponentProps} from 'react-router-dom'




const Weather = ({history}: RouteComponentProps) => {

    const [search, setSearch] = useState('')
    const [bool, setBool] = useState(false)
    

    const handleSubmit = () => {
      console.log(search);
      setBool(true)
    }

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" 
            onChange={(e)=>{
                setSearch(e.target.value)
            }}
          />
          <Form.Text className="text-muted">
            Please enter city name you are looking for!!
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form>
{bool && search && <CityWeather search = {search}/>}
    </div>
  );
};

export default Weather;
