function PlantCard({plant : {name, price, sold, details, image} }) {

  return (
    <div>
      <h4>{name}</h4>
      <p>{price}</p>
      <p>{details}</p>
      <p>Available? {sold}</p>
    </div>
  )
}

export default PlantCard;