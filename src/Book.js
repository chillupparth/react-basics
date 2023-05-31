const Book = (props) => {
    const { title, img, author, number } = props;

    return <article className="Book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4 className="Author">{author}</h4>
        <span className="number">#{number + 1}</span>
    </article>
}

export default Book