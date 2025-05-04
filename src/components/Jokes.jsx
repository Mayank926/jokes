import './jokes.css'

const Joke = (props) => {
    return (
        <div className="jokeCard">
            {props.setup? <h3>{props.setup}</h3> : <h3>Oops</h3> }
            <p>{props.punchline}</p>
            <span>Upvotes</span><span>{props.upvotes}</span>
            <span>Downvotes</span><span>{props.downvotes}</span>
            <span>Is it a pun?</span><span>{props.isPun ? "Yes" : "No"}</span>
            {Array.isArray(props.comments)?props.comments.map( e =>
                <p>{e}</p>
            ):<p>"NotArray"</p>}
        </div>
    );
};

export default Joke;