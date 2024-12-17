function Banner({img, title}){
    return(
        <div className="banner">
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default Banner