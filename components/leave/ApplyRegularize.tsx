import React, { useState } from "react";
import Navbar from "../Navbar";
class ApplyRegularize extends React.Component<any,any>{
  constructor(props:any){
    super(props);
    this.state = {
      approver: "hr",
    reason: "work from home",
    date: "",
    checkin: "",
    checkout: "",
    show:false
    }
  }
  
   approverHandler = (e: any) => {
    this.setState({approver:e.target.value});
  };
   reasonHandler = (e: any) => {
    this.setState({ reason: e.target.value });
  };
   dateHandler = (e:any) =>{
      this.setState({date:e.target.value});
  }
   checkinHandler = (e:any)=>{
      this.setState({checkin:e.target.value});
  }
   checkoutHandler = (e:any) =>{
      this.setState({checkout:e.target.value});
  }
   regularizesubmitHandler = () => {
    localStorage.setItem("regularize", JSON.stringify(this.state));
    this.setState({show:true});
  };
  render(){
  return (
    <div>
      <Navbar />
      {!this.state.show && <form onSubmit={this.regularizesubmitHandler}>
        <span>Select Lead/Approver:- </span>
        <select
          value={this.state.approver}
          onChange={this.approverHandler}
          style={{ marginTop: "10px" }}
        >
          <option value="hr">HR</option>
          <option value="department head">DEPARTMENT HEAD</option>
          <option value="team leader">TEAM LEADER</option>
          <option value="senior manager">SENIOR MANAGER</option>
          <option value="manager">MANAGER</option>
        </select>
        <br />
        <span>Date:- </span>
        <input
          type="text"
          name="date"
          value={this.state.date}
          onChange={this.dateHandler}
          style={{ marginTop: "10px" }}
        />
        <span> YYYY-MM-DD</span>
        <br />
        <span>Check In:- </span>
        <input
          type="text"
          name="checkin"
          value={this.state.checkin}
          style={{ marginTop: "10px" }}
          onChange={this.checkinHandler}
        />
        <span> HH:MM:SS (24 hrs format)</span>
        <br />
        <span>Check Out:- </span>
        <input
          type="text"
          name="checkout"
          value={this.state.checkout}
          style={{ marginTop: "10px" }}
          onChange={this.checkoutHandler}
        />
        <span> HH:MM:SS (24 hrs format)</span>
        <br />
        <span>Reason:- </span>
        <select
          value={this.state.reason}
          onChange={this.reasonHandler}
          style={{ marginTop: "10px" }}
        >
          <option value="work from home">WORK FROM HOME</option>
          <option value="on site">ON SITE</option>
          <option value="half day">HALF DAY</option>
          <option value="present">PRESENT</option>
        </select>
        <br />
        <input
          type="submit"
          value="Apply"
          style={{
            backgroundColor: "cornflowerblue",
            marginTop: "10px",
            color: "white",
            border: "none",
            fontSize: "15px",
          }}
        />
      </form>}
      {this.state.show && <span style={{color:"green"}}>Regulaize Request sent successfully</span>}
      {this.state.show && <table style={{marginLeft:"450px"}}>
        <thead>
          <tr>
            <td><h3>Approver </h3></td>
            <td><h3>Reason</h3></td>
            <td><h3>Date </h3></td>
            <td><h3>Checkin </h3></td>
            <td><h3>checkout </h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.approver}</td>
            <td>{this.state.reason}</td>
            <td>{this.state.date}</td>
            <td>{this.state.checkin}</td>
            <td>{this.state.checkout}</td>
          </tr>
        </tbody>
      </table> }
    </div>
  );
};
}
export default ApplyRegularize;

// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const ApplyRegularize = () => {
//   const [show, setShow] = useState(false);
//   const [applyregularize, this.setState] = useState({
//     approver: "hr",
//     reason: "work from home",
//     date: "",
//     checkin: "",
//     checkout: "",
//   });
//   const approverHandler = (e: any) => {
//     setApplyRegularize({ ...applyregularize, approver: e.target.value });
//   };
//   const reasonHandler = (e: any) => {
//     setApplyRegularize({ ...applyregularize, reason: e.target.value });
//   };
//   const dateHandler = (e:any) =>{
//       setApplyRegularize({...applyregularize, date:e.target.value});
//   }
//   const checkinHandler = (e:any)=>{
//       setApplyRegularize({...applyregularize, checkin:e.target.value});
//   }
//   const checkoutHandler = (e:any) =>{
//       setApplyRegularize({...applyregularize,checkout:e.target.value});
//   }
//   const regularizesubmitHandler = () => {
//     localStorage.setItem("regularize", JSON.stringify(applyregularize));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       {!show && <form onSubmit={regularizesubmitHandler}>
//         <span>Select Lead/Approver:- </span>
//         <select
//           value={applyregularize.approver}
//           onChange={approverHandler}
//           style={{ marginTop: "10px" }}
//         >
//           <option value="hr">HR</option>
//           <option value="department head">DEPARTMENT HEAD</option>
//           <option value="team leader">TEAM LEADER</option>
//           <option value="senior manager">SENIOR MANAGER</option>
//           <option value="manager">MANAGER</option>
//         </select>
//         <br />
//         <span>Date:- </span>
//         <input
//           type="text"
//           name="date"
//           value={applyregularize.date}
//           onChange={dateHandler}
//           style={{ marginTop: "10px" }}
//         />
//         <span> YYYY-MM-DD</span>
//         <br />
//         <span>Check In:- </span>
//         <input
//           type="text"
//           name="checkin"
//           value={applyregularize.checkin}
//           style={{ marginTop: "10px" }}
//           onChange={checkinHandler}
//         />
//         <span> HH:MM:SS (24 hrs format)</span>
//         <br />
//         <span>Check Out:- </span>
//         <input
//           type="text"
//           name="checkout"
//           value={applyregularize.checkout}
//           style={{ marginTop: "10px" }}
//           onChange={checkoutHandler}
//         />
//         <span> HH:MM:SS (24 hrs format)</span>
//         <br />
//         <span>Reason:- </span>
//         <select
//           value={applyregularize.reason}
//           onChange={reasonHandler}
//           style={{ marginTop: "10px" }}
//         >
//           <option value="work from home">WORK FROM HOME</option>
//           <option value="on site">ON SITE</option>
//           <option value="half day">HALF DAY</option>
//           <option value="present">PRESENT</option>
//         </select>
//         <br />
//         <input
//           type="submit"
//           value="Apply"
//           style={{
//             backgroundColor: "cornflowerblue",
//             marginTop: "10px",
//             color: "white",
//             border: "none",
//             fontSize: "15px",
//           }}
//         />
//       </form>}
//       {show && <span style={{color:"green"}}>Regulaize Request sent successfully</span>}
//     </div>
//   );
// };

// export default ApplyRegularize;
