import { Card, Image } from 'semantic-ui-react'

function PlantCard({plant : {name, price, sold, details, image} }) {

  return (
    <Card className="plantcard">
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Image src={image} alt="plant"/>
        <Card.Description>Price: {price}</Card.Description>
        <Card.Description>{details}</Card.Description>
        {/* <p>Available? {sold}</p> */}
      </Card.Content>
    </Card>
  )
}

export default PlantCard;

