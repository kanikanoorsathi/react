export default function Post({post}){
    return(
        <div className="newCard">
            <p>{post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}