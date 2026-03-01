
import Friends from './Friends'
import './App.css'
import { Suspense } from 'react'
import Posts from './Posts'
import Players from './Players'



// const fetchFriends = async() =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   return res.json();
// }

// const fetchPosts = async()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   return res.json();
// }

function App() {
  // const friendsPromise = fetchFriends();
  // const postPromise = fetchPosts();

 
  return (
    <>
      <h3>Vite + React</h3>
      <Players></Players>
      {/* <Suspense fallback={<h4>Posts are coming.....</h4>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat...</h3>}>
           <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      
    </>
  )
}

export default App
