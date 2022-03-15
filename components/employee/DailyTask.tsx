import React, { useState } from 'react'
import Navbar from '../Navbar'
// const data = () =>{
//     const daily = localStorage.getItem("dailyupdate");
//     if(!daily)return{
//         project:"",
//         task:"",
//         time:"",
//         status:"inprogress",
//         blockingissue:"",
//         responsibleperson:""
//     }
//     return JSON.parse(daily)
// }
const DailyTask = () => {
    const [task,setTask]=useState({
                project:"",
                task:"",
               time:"",
                status:"inprogress",
                blockingissue:"",
                responsibleperson:""
            })
    const[show,setShow]=useState(false);
    const projectHandler = (e:any) =>{
        setTask({...task,project:e.target.value})
    }
    const taskHandler = (e:any) =>{
        setTask({...task,task:e.target.value})
    }
    const timeHandler = (e:any) =>{
        setTask({...task,time:e.target.value})
    }
    const statusHandler = (e:any) =>{
        setTask({...task,status:e.target.value})
    }
    const blockingHandler = (e:any) =>{
        setTask({...task,blockingissue:e.target.value})
    }
    const personHandler = (e:any) =>{
        setTask({...task,responsibleperson:e.target.value})
    }
    const dailytasks = () =>{
        localStorage.setItem("dailyupdate",JSON.stringify(task));
        setShow(true);
    }
  return (<>
  <Navbar /> 
  <span style={{textDecoration:"underline"}}>Daily Task Details</span>
  <hr />
  {!show && <form onSubmit={dailytasks}>
  <span>Project:- </span><input type="text" name="project" style={{marginTop:"10px"}} onChange={projectHandler} value={task.project}/><br />
  <span>Task:- </span><input type="text" name='task' style={{marginTop:"10px"}} onChange={taskHandler} value={task.task}/><br />
  <span>Time(in Hrs):- </span><input type="text" name="time" style={{marginTop:"10px"}} onChange={timeHandler} value={task.time}/><br />
  <span>Status:- </span><select style={{marginTop:"10px"}} onChange={statusHandler} value={task.status}>
        <option value="inprogress">in progress</option>
        <option value="completed">completed</option>
    </select><br />
    <span>Blocking Issue:- </span><input type="text" name='blockinissue' style={{marginTop:"10px"}} onChange={blockingHandler} value={task.blockingissue}/><br />
    <span>Responsible Person:- </span><input type="text" name='personresponisible' style={{marginTop:"10px"}} onChange={personHandler} value={task.responsibleperson}/><br />
    <input type="submit" value="Submit Task" style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}/>
    </form>}
    
    {show && <span style={{color:"green"}}>Daily Task updated!</span> }
    <br />
    {show && localStorage.getItem("dailyupdate") }
    </>
  )
}

export default DailyTask
// import React, { useState } from 'react'
// import Navbar from '../Navbar'
// // const data = () =>{
// //     const daily = localStorage.getItem("dailyupdate");
// //     if(!daily)return{
// //         project:"",
// //         task:"",
// //         time:"",
// //         status:"inprogress",
// //         blockingissue:"",
// //         responsibleperson:""
// //     }
// //     return JSON.parse(daily)
// // }
// const DailyTask = () => {
//     const [task,setTask]=useState({
//                 project:"",
//                 task:"",
//                time:"",
//                 status:"inprogress",
//                 blockingissue:"",
//                 responsibleperson:""
//             })
//     const[show,setShow]=useState(false);
//     const projectHandler = (e:any) =>{
//         setTask({...task,project:e.target.value})
//     }
//     const taskHandler = (e:any) =>{
//         setTask({...task,task:e.target.value})
//     }
//     const timeHandler = (e:any) =>{
//         setTask({...task,time:e.target.value})
//     }
//     const statusHandler = (e:any) =>{
//         setTask({...task,status:e.target.value})
//     }
//     const blockingHandler = (e:any) =>{
//         setTask({...task,blockingissue:e.target.value})
//     }
//     const personHandler = (e:any) =>{
//         setTask({...task,responsibleperson:e.target.value})
//     }
//     const dailytasks = () =>{
//         localStorage.setItem("dailyupdate",JSON.stringify(task));
//         setShow(true);
//     }
//   return (<>
//   <Navbar /> 
//   <span style={{textDecoration:"underline"}}>Daily Task Details</span>
//   <hr />
//   {!show && <form onSubmit={dailytasks}>
//   <span>Project:- </span><input type="text" name="project" style={{marginTop:"10px"}} onChange={projectHandler} value={task.project}/><br />
//   <span>Task:- </span><input type="text" name='task' style={{marginTop:"10px"}} onChange={taskHandler} value={task.task}/><br />
//   <span>Time(in Hrs):- </span><input type="text" name="time" style={{marginTop:"10px"}} onChange={timeHandler} value={task.time}/><br />
//   <span>Status:- </span><select style={{marginTop:"10px"}} onChange={statusHandler} value={task.status}>
//         <option value="inprogress">in progress</option>
//         <option value="completed">completed</option>
//     </select><br />
//     <span>Blocking Issue:- </span><input type="text" name='blockinissue' style={{marginTop:"10px"}} onChange={blockingHandler} value={task.blockingissue}/><br />
//     <span>Responsible Person:- </span><input type="text" name='personresponisible' style={{marginTop:"10px"}} onChange={personHandler} value={task.responsibleperson}/><br />
//     <input type="submit" value="Submit Task" style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}/>
//     </form>}
    
//     {show && <span style={{color:"green"}}>Daily Task updated!</span> }
//     <br />
//     {show && localStorage.getItem("dailyupdate") }
//     </>
//   )
// }

// export default DailyTask