import { Button, Form, Input } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import { useState } from "react"

function AddPlant({user, setAllPlants}) {
  const history = useHistory()
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sold: false,
    details: "",
    image: null,
    user_id: user.id
  })

  function handleChange(e) {
    setFormData((current) => ({
        ...current,
        [e.target.name]: e.target.value,
    }))
  }

  function handleFileChange(e){
    setFormData((currentFormData) => ({
      ...currentFormData,
      image: e.target.files[0],
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    let plantInfo = new FormData(e.target)
      plantInfo.append('user_id', user.id)
      plantInfo.append('sold', false)
    fetch(`/plants`, {
        method: 'POST',
        body:plantInfo
    })
    .then(resp => resp.json())
    .then(data => {
      setAllPlants((current) => [data,...current])
      setFormData({
        name: "",
        price: "",
        sold: false,
        details: "",
        image: null
      })
      history.push('/listed-plants')
    })
  }

  return (
    <div className='form'>
      <h3>Post Plants Here</h3>
      <Form size={'big'} onSubmit={handleSubmit} >
        <Form.Field>
          <label> Plant Name: </label>
          <Input name='name' type='text' value={formData.name} onChange={handleChange} placeholder='Snake Plant' required/>
        </Form.Field>
        <Form.Field>
          <label> Price: </label>
          <Input name='price' type='number' value={formData.price} onChange={handleChange} placeholder='35' required/>
        </Form.Field>
        <Form.Field>
          <label> Details: </label>
          <Input name='details' type='text' value={formData.details} onChange={handleChange} placeholder='Easy to care for!' />
        </Form.Field>
        <Form.Field>
          <label> Image: </label>
          <Input name='image' type='file' onChange={handleFileChange} />
        </Form.Field>
        <Button className='bttns' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default AddPlant;