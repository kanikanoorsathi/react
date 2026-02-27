//export default function ToDO({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }
export default function ToDo({task, isDone}){
    if(isDone === true){
        return <li>Done: {task}</li>
    }
    else{
       return <li>Pending: {task}</li> 
    }
}