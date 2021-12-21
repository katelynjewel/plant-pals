import { Button, Form, Input } from 'semantic-ui-react'
import { useHistory } from "react-router-dom"
import { useState } from "react"

function AddPlant({user, setAllPlants}) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sold: false,
    details: "",
    image: null,
    user_id: user.id
  });

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
      console.log(data)
      setFormData({
        name: "",
        price: "",
        sold: false,
        details: "",
        image: null
      })
      history.push('/listed-plants');
    })
  }

  return (
    <div className='form'>
      <h3>Post Plants Here</h3>
      <Form onSubmit={handleSubmit}>
        <label> Plant Name: <Input name='name' type='text' value={formData.name} onChange={handleChange} placeholder='Snake Plant' required/></label>
          <br/>
        <label> Price: <Input name='price' type='number' value={formData.price} onChange={handleChange} placeholder='35' required/></label>
          <br/>
        <label> Details: <Input name='details' type='text' value={formData.details} onChange={handleChange} placeholder='Easy to care for!' /></label>
          <br/>
        <label> Image: <Input name='image' type='file' onChange={handleFileChange} /></label>
          <br/>
        <Button className='bttns' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default AddPlant;