import { Card, Image } from 'semantic-ui-react'

function PlantCard({plant : {name, price, sold, details, image} }) {
  
  // const avaialable = sold.toString() 

  return (
    <Card className='plantcard'>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Image src={image} alt='plant'/>
        <Card.Description>Price: {price}</Card.Description>
        <Card.Description>{details}</Card.Description>
        {/* <Card.Content extra>{avaialable}</Card.Content> */}
      </Card.Content>
    </Card>
  )
}

export default PlantCard;

