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
// export default function TryToDo({task, isDone, time= 0}){
//     if(isDone === true){
//         return <li>Done: {task} Duration: {time}</li>
//     }
//     else{
//        return <li>To be done: {task}</li> 
//     }
// }


//conditional rendering: 3 ternary
//condition ? true : false

// export default function TryToDo({task, isDone, time =0}){
//     return isDone ? 
//         <li>Done:{task} time: {time}
//         </li> : <li>Not Done: {task}</li>
// }

//conditional rendering : 4 &&

// export default function TryToDo({task, isDone, time =0}){
//     return isDone && <li>Done Task: {task} time: {time}</li>
// }

//  conditional rendering : 5 ||

// export default function TryToDo({task, isDone, time =0}){
//     return isDone || <li>Not Done Task: {task} time: {time}</li>
// }

// conditional rendering: 6 use variable
 export default function TryToDo({task, isDone, time}){
   //const displayTime = time ? time : 100;
    let listItem;
    if(isDone === true){
        //listItem =<li>Done: {task} time: {displayTime}</li>
        listItem =<li>Done: {task} time: {time ? 'I am done' : 'not done yet'}</li>
    }
    else{
       listItem = <li>Pending: {task}</li> 
    }
    return listItem
}