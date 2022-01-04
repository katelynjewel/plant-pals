import { Card, Image } from 'semantic-ui-react'

function PlantCard({plant : {name, price, sold, details, image} }) {
  
  // const avaialable = sold.toString() 

  return (
    <Card.Group centered itemsPerRow={2}>
      <Card raised className='plantcard'>
        <Card.Content>
          <Image src={image} alt='plant'/>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>Price: {price}</Card.Meta>
          <Card.Description>{details}</Card.Description>
          {/* <Card.Content extra>{avaialable}</Card.Content> */}
        </Card.Content>
      </Card>
    </Card.Group>
  )
}

export default PlantCard;

