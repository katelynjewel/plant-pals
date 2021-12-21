import { Button, Form } from 'semantic-ui-react'
import { useState } from "react"

function EditPlant({plant, user, setUser, setAllPlants}) {
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

  function handleSubmit(e){
    e.preventDefault()
    let plantInfo = new FormData(e.target)
      plantInfo.append("user_id", user.id)
      plantInfo.append("sold", false)
    fetch(`/plants/${plant.id}`, {
        method: "PATCH",
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
      setUser(data)
    })
  }


  return (
    <div>
      <h3>Edit Plants Here</h3>
      <Form onSubmit={handleSubmit} className="add">
        <label> Plant Name: <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Snake Plant" ></input></label>
        <br/>
        <label> Price: <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="35" ></input></label>
        <br/>
        <label> Details: <input name="details" type="text" value={formData.details} onChange={handleChange} placeholder="Easy to care for!" ></input></label>
        <br/>
        <label> Image: <input name="image" type="file" onChange={handleFileChange} ></input></label>
        <br/>
        <Button className='bttns' type="submit">Submit</Button>
      </Form>
    </div>
  )
}

export default EditPlant;