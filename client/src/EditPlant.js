import { Button, Form, Input } from 'semantic-ui-react'
import { useState } from 'react'

function EditPlant({plant, user, setAllPlants}) {
  const [formData, setFormData] = useState({
    name: plant.name,
    price: plant.price,
    sold: plant.sold,
    details: plant.details,
    image: plant.image,
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

  function handleCheck(e){
    if (!e.target.checked) {
      setFormData({ ...formData, [e.target.name]: false });
    } else if (e.target.checked) {
      setFormData({ ...formData, [e.target.name]: true });
    }
    console.log(e.target.checked)
  }

  function handleSubmit(e){
    e.preventDefault()
    let plantInfo = new FormData(e.target)
      plantInfo.append('user_id', user.id)
      plantInfo.append('sold', false)
    fetch(`/plants/${plant.id}`, {
        method: 'PATCH',
        body:plantInfo
    })
    .then(resp => resp.json())
    .then(data => {
      setAllPlants((current) => [data, ...current])
      setFormData({
        name: "",
        price: "",
        sold: "",
        details: "",
        image: null
      })
    })
  }

  return (
    <div>
      <Form onSubmit={handleSubmit} className='form'>
        <label> Plant Name: <Input name='name' type='text' value={formData.name} onChange={handleChange} placeholder='Snake Plant' /></label>
          <br/>
        <label> Price: <Input name='price' type='number' value={formData.price} onChange={handleChange} placeholder='35' /></label>
          <br/>
        <label> Details: <Input name='details' type='text' value={formData.details} onChange={handleChange} placeholder='Easy to care for!' /></label>
          <br/>
        <label> Mark as Sold: <Input name='sold' type='checkbox' checked={formData.sold} onClick={handleCheck} /></label>
          <br/>
        <label> Image: <Input name='image' type='file' onChange={handleFileChange} /></label>
          <br/>
        <Button className='bttns' type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default EditPlant;