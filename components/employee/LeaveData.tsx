import React, { useState } from "react";
import Navbar from "../Navbar";

class LeaveData extends React.Component<any,any>  {
  constructor(props:any){
    super(props);
    this.state = {
      date: "",
    reason: "",
    show:false
    }
  }
   dateHandler = (e:any) =>{
    this.setState({date:e.target.value})
  }
   reasonHandler = (e:any) =>{
    this.setState({reason:e.target.value})
  }
   submitLeaveHandler = () =>{
    localStorage.setItem("leavedata",JSON.stringify(this.state))
    this.setState({show:true});
  }
  render(){
  return (
    <>
      <Navbar />
      <span style={{textDecoration:"underline"}}>Leave Details</span>
      <hr />
      {!this.state.show && <form onSubmit={this.submitLeaveHandler}>
        <span>Date:- </span>
        <input
          type="text"
          value={this.state.date}
          onChange={this.dateHandler}
          name="date"
          style={{ marginTop: "10px" }}
        /> <span>YYYY-MM-DD</span>
        <br />
        <span>Reason:- </span>
        <input
          type="text"
          value={this.state.reason}
          onChange={this.reasonHandler}
          name="date"
          style={{ marginTop: "10px" }}
        />
        <br />
        <input type="submit" value="Apply" style={{
              backgroundColor: "cornflowerblue",
              marginTop: "10px",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}/>
      </form>}
      {this.state.show && <span style={{color:"red"}}>Applied for Leave</span> }
      {this.state.show && <table style={{marginLeft:"580px"}}>
        <thead>
          <tr>
            <td><h3>Date </h3></td>
            <td><h3>Reason </h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.date}</td>
            <td>{this.state.reason}</td>
          </tr>
        </tbody>
      </table> }
    </>
  );
};
}
export default LeaveData;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const data =() =>{
//   const leave =localStorage.getItem("leavedata");
//   if(!leave)return{
//     date: "",
//     reason: "",
//   }
//   return JSON.parse(leave)
// }
// const LeaveData = () => {
//   const [show, setShow] = useState(false);
//   const [leave, setLeave] = useState(data);
//   const dateHandler = (e:any) =>{
//     setLeave({...leave,date:e.target.value})
//   }
//   const reasonHandler = (e:any) =>{
//     setLeave({...leave,reason:e.target.value})
//   }
//   const submitLeaveHandler = () =>{
//     localStorage.setItem("leavedata",JSON.stringify(leave));
//     setShow(true);
//   }
//   return (
//     <>
//       <Navbar />
//       <span style={{textDecoration:"underline"}}>Leave Details</span>
//       <hr />
//       {!show && <form onSubmit={submitLeaveHandler}>
//         <span>Date:- </span>
//         <input
//           type="text"
//           value={leave.date}
//           onChange={dateHandler}
//           name="date"
//           style={{ marginTop: "10px" }}
//         /> <span>YYYY-MM-DD</span>
//         <br />
//         <span>Reason:- </span>
//         <input
//           type="text"
//           value={leave.reason}
//           onChange={reasonHandler}
//           name="date"
//           style={{ marginTop: "10px" }}
//         />
//         <br />
//         <input type="submit" value="Apply" style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}/>
//       </form>}
//       {show && <span style={{color:"red"}}>Applied for Leave</span> }
//     </>
//   );
// };

// export default LeaveData;
