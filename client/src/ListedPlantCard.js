import { useState } from 'react'
import { Card, Image, Modal, Button } from 'semantic-ui-react'
import EditPlant from './EditPlant'

function ListedPlantCard({setAllPlants, plant, user, plant : {name, price, sold, details, image}}) {
  const [open, setOpen] = useState(false)

  const avaialable = sold.toString() 

  return (
    <Card className='plantcard'>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Image src={image} alt='plant'/>
        <Card.Description>Price: {price}</Card.Description>
        <Card.Description>{details}</Card.Description>
        <Card.Content extra>{avaialable}</Card.Content>
      </Card.Content>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        header= {'Edit Plant Here:'}
        content = {<EditPlant plant={plant} user={user} setAllPlants={setAllPlants}/>}
        open={open}
        trigger={<Button>Edit</Button>}
      />
    </Card>
  )
}

export default ListedPlantCard;