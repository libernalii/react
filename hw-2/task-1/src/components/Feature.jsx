const Feature = ({title, description}) => {
  return (
    <div className="card-feature">
      <h3>
        <span>{title}</span>
      </h3>
      <p>{description}</p>
    </div>
  )
}

export default Feature
