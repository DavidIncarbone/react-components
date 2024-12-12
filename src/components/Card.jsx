
import Button from "./Button";

function Card({ title, description, image, id }) {

    return (
        <li key={id} className="list-unstyled">
            <div className="card container mb-5" style={{
                width: 30 + "rem"
            }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><b>{description}</b></p>
                    <Button />
                </div>
            </div>
        </li>
    )
}

export default Card;