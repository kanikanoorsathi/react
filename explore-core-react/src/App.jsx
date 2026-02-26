import './App.css'
import ToDO from './Todo';

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <ToDO task="Learn React" isDone={true}></ToDO>
      <ToDO task="Revise Js" isDone={false}></ToDO>
      <ToDO task="Take a shower" isDone={true}></ToDO>
      {/* <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Player name= "tamim" run= "5000"></Player>
      <Player name= "mushi" run= "5000"></Player>
      <Salami event= "Roja Eid" amount="20"></Salami>
      <Salami event= "Graduation"></Salami>
       */}
    </>
  )
}

function Developer (props){
  console.log(props);
  return(
    <div style={{
        margin: '10px',
        border:'2px solid green',
        borderRadius: '20px'
      }}>
        <h3>Developer: {props.name}</h3>
        <p>Technology: {props.tech}</p>
      
    </div>
  
  )
  
}

function Salami({event, amount=500}){
  return(
    <div className='student'>
      <h3>Salami For:{event}</h3>
      <p>Amount {amount}</p>
    </div>
  )
}
//const {name, run} = {name: 'tamim', run: '5000'}

function Player({name, run}){
  //console.log(props)
  return(
    <div className= 'student'>
      <h3>Name: {name} </h3>
      <p>run: {run}</p>
    </div>
  )
}
// const {name, tech} = {name: 'Mozumder', tech: 'js'}
export default App
