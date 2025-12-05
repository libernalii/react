import features from "../mocks/data-arrays.js"
import Feature from "./Feature"

const Features = () => {
    return (
        <div className="features">
            {features.map(({id, title, description}) => (
                <Feature key={id} title={title} description={description}/>
            ))}
        </div>
    )
}

export default Features
