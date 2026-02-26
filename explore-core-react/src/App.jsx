import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Developer name="Mozumder" tech="JS"></Developer>
      <Developer name="Rajon" tech="python"></Developer>
      <Developer name="Shabana" tech="Java"></Developer>
      <Player></Player>
      
    </>
  )
}

function Developer (props){
  console.log(props);
  return(
    <div style={{
        border:'2px solid green',
        borderRadius: '20px'
      }}>
        <h3>Developer: {props.name}</h3>
        <p>Technology: {props.tech}</p>
      
    </div>
  
  )
  
}

function Player(){
  return(
    <div className= 'student'>
      <h3>Name: </h3>
      <p>run: </p>
    </div>
  )
}

export default App
