import { use } from "react";
import Post from './Post'

export default function Posts({postPromise}){
    const posts = use(postPromise);
    console.log(posts);
    return(
        <div className="newCard">
            <h2>
                All posts are here: {postPromise.lenght}
            </h2>
            {
                posts.map(post => <Post post ={post}></Post>)
            }
        </div>
    )
}