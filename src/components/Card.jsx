import Button from "./Button";

function Card(titolo, descrizione, immagine) {

    return (

        <div className="card container mb-5" style={{
            width: 30 + "rem"
        }}>
            <img className="card-img-top" src="/blog-1.avif" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Titolo del post</h5>
                <p className="card-text"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam, provident iure nulla illo corrupti id molestias assumenda eveniet vitae repudiandae obcaecati explicabo. Nemo id dolorem dolor illum adipisci quae.</b></p>
                <Button />
            </div>
        </div>

    )
}

export default Card;