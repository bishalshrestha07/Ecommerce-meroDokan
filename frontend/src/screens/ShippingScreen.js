import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { Form,Button,Row, Col } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions'


function ShippingScreen() {

  const navigate = useNavigate()

  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  const dispatch = useDispatch()

  const [address,SetAddress] = useState(shippingAddress.address)
  const [city,SetCity] = useState(shippingAddress.city)
  const [postalCode,SetPostalCode] = useState(shippingAddress.postalCode)
  const [country,SetCountry] = useState(shippingAddress.country)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress( {address,city,postalCode,country} ))
    navigate('/payment')
    
  }


  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        
        <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Address'
              value={address ? address : ''}
              onChange={(e) => SetAddress(e.target.value)}
            >

            </Form.Control>
          </Form.Group>

        <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter City'
              value={city ? city : ''}
              onChange={(e) => SetCity(e.target.value)}
            >

            </Form.Control>
          </Form.Group>

        <Form.Group controlId='postalCode'>
            <Form.Label>PostalCode</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter PostalCode'
              value={postalCode ? postalCode : ''}
              onChange={(e) => SetPostalCode(e.target.value)}
            >

            </Form.Control>
          </Form.Group>

        <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
              required
              type='text'
              placeholder='Enter Country'
              value={country ? country : ''}
              onChange={(e) => SetCountry(e.target.value)}
            >

            </Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>

      </Form>
    </FormContainer>
  )
}

export default ShippingScreen