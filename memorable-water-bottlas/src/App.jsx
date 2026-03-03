
import { Suspense } from 'react'
import './App.css'
import Bottles from './components/Bottles/Bottles'


// const bottlesPromise = fetch('./bottles.json')
//   .then(res => res.json());

const bottlesPromise = fetch('bottles.json') .then(res => res.json())
function App() {

  // const bottles = [
  //   {id: 1, name: 'Pink Nike Bottle', pice: 250, color: 'pink' },
  //   {id: 2, name: 'Black Nike Bottle', pice: 250, color: 'Black' },
  //   {id: 3, name: 'Blue Nike Bottle', pice: 250, color: 'Blue' },
  //   {id: 4, name: 'White Nike Bottle', pice: 250, color: 'White' },
  // ]

  return (
    <>
      
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are loading....</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
     
    </>
  )
}

export default App
