import { useState } from "react"

export default function Batsman(){
    const [ runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle=()=>{
          const updateRuns = runs + 1;
          setRuns(updateRuns);
    }
    const handlesSix =() =>{
        const updatedRuns = runs + 6;
        const upddatedSixes = sixes + 1
        setSixes(upddatedSixes);
        setRuns(updatedRuns);
    }
    return (
        <div>
            <h3>Player: Tamim Bangladesh Batsman</h3>
            <p><small>Six: {sixes}</small></p>
            {
                runs > 50 && <p>Your Score: 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button>Four</button>
            <button onClick={handlesSix}>Six</button>
        </div>
    )
}