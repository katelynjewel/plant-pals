import { useState } from 'react'
import { Card, Image, Modal, Button } from 'semantic-ui-react'
import EditPlant from './EditPlant'

function ListedPlantCard({setAllPlants, plant, user, plant : {name, price, sold, details, image}}) {
  const [open, setOpen] = useState(false)

  const avaialable = sold.toString() 

  return (
    <Card.Group centered itemsPerRow={'three'}>
      <Card raised className='plantcard'>
        <Card.Content>
          <Image src={image} alt='plant'/>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>Price: {price}</Card.Meta>
          <Card.Description>{details}</Card.Description>
          <Card.Content extra> Sold? {avaialable}</Card.Content>
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
    </Card.Group>
  )
}

export default ListedPlantCard;