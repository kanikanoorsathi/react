// export default function TryToDO({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }
// export default function TryToDo({task, isDone}){
//     if(isDone === true){
//         return <li>Done: {task}</li>
//     }
//     else{
//        return <li>Pending: {task}</li> 
//     }
// }
export default function TryToDo({task, isDone, time= 0}){
    if(isDone === true){
        return <li>Done: {task} Duration: {time}</li>
    }
    else{
       return <li>To be done: {task}</li> 
    }
}