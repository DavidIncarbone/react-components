import Button from "./Button";
import posts from "../data/posts"

console.log(posts.length)

function Card({ titolo, descrizione, immagine }) {

    return (
        posts.map((post) => {
            return (

                <div className="card container mb-5" style={{
                    width: 30 + "rem"
                }}>
                    <img className="card-img-top" src={post.immagine} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{post.titolo}</h5>
                        <p className="card-text"><b>{post.descrizione}</b></p>
                        <Button />
                    </div>
                </div>
            )
        })

    )


}

export default Card;