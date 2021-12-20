import { Button, Form } from 'semantic-ui-react'
import { useState } from "react"

function AddPlant({user, setAllPlants}) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sold: false,
    details: "",
    image: "",
    user_id: user.id
  });

  function handleChange(e) {
    setFormData((current) => ({
        ...current,
        [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`/plants`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(formData)
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
        image: ""
      })
    })
  }

  return (
    <div id="form">
      <h3>Post Plants Here</h3>
      <Form onSubmit={handleSubmit} className="add">
        <label> Plant Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Snake Plant" ></input></label>
        <br/>
        <label> Price: <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="35" ></input></label>
        <br/>
        <label> Details: <input name="details" type="text" value={formData.details} onChange={handleChange} placeholder="Easy to care for!" ></input></label>
        <br/>
        <label> Image: <input name="image" type="file" value={formData.image} onChange={handleChange} ></input></label>
        <br/>
        <Button className='bttns' type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default AddPlant;