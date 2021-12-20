function PlantCard({plant : {name, price, sold, details, image} }) {

  return (
    <div className="plantcard">
      {/* <img src={image} alt="plant"/> */}
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <p>{details}</p>
      {/* <p>Available? {sold}</p> */}
    </div>
  )
}

export default PlantCard;

