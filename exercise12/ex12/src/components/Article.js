function Article(props, children) {

    return (
        <article>
            <h1>{{props.title}}</h1>
            <p>{{props.description}}</p>
        </article>

    );
}

export default Article;