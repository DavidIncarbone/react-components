function Main() {
    return (
        <main className="pb-5">
            <div className="card container " style={{
                width: 30 + "rem"
            }}>
                <img className="card-img-top" src="/blog-1.avif" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Titolo del post</h5>
                    <p className="card-text"><b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam, provident iure nulla illo corrupti id molestias assumenda eveniet vitae repudiandae obcaecati explicabo. Nemo id dolorem dolor illum adipisci quae.</b></p>
                    <a href="#" className="btn btn-warning text-white">Leggi di più</a>
                </div>
            </div>
        </main>
    )
}

export default Main;