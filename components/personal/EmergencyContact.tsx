import React, { useState } from "react";
import Navbar from "../Navbar";

class EmergencyContact extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
    firstpersonname: "",
    firstpersonno: "",
    secondpersoname: "",
    secondpersonno: "",
    show:false
    }
  }
  firstnameHandler = (e:any) =>{
    this.setState({
      firstpersonname:e.target.value
    })
  }
  firstnoHandler = (e:any) =>{
     this.setState({firstpersonno:e.target.value})
  }
  secondnameHandler = (e:any) =>{
    this.setState({secondpersonname:e.target.value})
  }
  secondnoHandler = (e:any) =>{
    this.setState({secondpersonno:e.target.value})
  }
  emergencyHandler = () =>{
    localStorage.setItem("emergencydata",JSON.stringify(this.state));
    this.setState({show:true})
  }
  render(){
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>Emergency Contact</span>
      <hr />
      {!this.state.show && <form onSubmit={this.emergencyHandler}>
      <span>Firstperson Name:- </span>
      <input
        type="text"
        value={this.state.firstpersonname}
        name="firstpersonname"
        style={{ marginTop: "10px" }}
        onChange={this.firstnameHandler}
      />
      <br />
      <span>Firstperson No:- </span>
      <input
        type="number"
        value={this.state.firstpersonno}
        name="firstpersonno"
        style={{ marginTop: "10px" }}
        onChange={this.firstnoHandler}
      />
      <br />
      <span>Secondperson Name:- </span>
      <input
        type="text"
        value={this.state.secondpersoname}
        name="secondpersoname"
        style={{ marginTop: "10px" }}
        onChange={this.secondnameHandler}
      />
      <br />
      <span>Secondperson No:- </span>
      <input
        type="number"
        value={this.state.secondpersonno}
        name="secondpersonno"
        style={{ marginTop: "10px" }}
        onChange={this.secondnoHandler}
      />
      <br />
      <input
        type="submit"
        value="Submit Data"
        style={{
          backgroundColor: "cornflowerblue",
          marginTop: "10px",
          color: "white",
          border: "none",
          fontSize: "15px",
        }}
      />
      </form>}
      {this.state.show && <span style={{color:"green"}}>Emergency Data Added Successfully</span>}
      {this.state.show && <table style={{marginLeft:"500px"}}>
        <thead>
          <tr>
            <td><h3>Firstperson Name. </h3></td>
            <td><h3>Firstperson No. </h3></td>
            <td><h3>Secondperson Name. </h3></td>
            <td><h3>Secondperson No. </h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.firstpersonname}</td>
            <td>{this.state.firstpersonno}</td>
            <td>{this.state.secondpersoname}</td>
            <td>{this.state.secondpersonno}</td>
          </tr>
        </tbody>
      </table> }
    </div>
  );
      }
};

export default EmergencyContact;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const EmergencyData = () =>{
//   const emerData = localStorage.getItem("emergencydata")
//   if(!emerData) return{
//     firstpersonname: "",
//     firstpersonno: "",
//     secondpersoname: "",
//     secondpersonno: "",
//   };
//   return JSON.parse(emerData);
// }
// const EmergencyContact = () => {
//   const[show,setShow]=useState(false);
//   const [emergencyData, setEmergencyData] = useState(EmergencyData);
//   const firstnameHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,firstpersonname:e.target.value})
//   }
//   const firstnoHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,firstpersonno:e.target.value})
//   }
//   const secondnameHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,secondpersoname:e.target.value})
//   }
//   const secondnoHandler = (e:any) =>{
//     setEmergencyData({...emergencyData,secondpersonno:e.target.value})
//   }
//   const emergencyHandler = () =>{
//     localStorage.setItem("emergencydata",JSON.stringify(emergencyData));
//     setShow(true);
//   }
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>Emergency Contact</span>
//       <hr />
//       {!show && <form onSubmit={emergencyHandler}>
//       <span>Firstperson Name:- </span>
//       <input
//         type="text"
//         value={emergencyData.firstpersonname}
//         name="firstpersonname"
//         style={{ marginTop: "10px" }}
//         onChange={firstnameHandler}
//       />
//       <br />
//       <span>Firstperson No:- </span>
//       <input
//         type="number"
//         value={emergencyData.firstpersonno}
//         name="firstpersonno"
//         style={{ marginTop: "10px" }}
//         onChange={firstnoHandler}
//       />
//       <br />
//       <span>Secondperson Name:- </span>
//       <input
//         type="text"
//         value={emergencyData.secondpersoname}
//         name="secondpersoname"
//         style={{ marginTop: "10px" }}
//         onChange={secondnameHandler}
//       />
//       <br />
//       <span>Secondperson No:- </span>
//       <input
//         type="number"
//         value={emergencyData.secondpersonno}
//         name="secondpersonno"
//         style={{ marginTop: "10px" }}
//         onChange={secondnoHandler}
//       />
//       <br />
//       <input
//         type="submit"
//         value="Submit Data"
//         style={{
//           backgroundColor: "cornflowerblue",
//           marginTop: "10px",
//           color: "white",
//           border: "none",
//           fontSize: "15px",
//         }}
//       />
//       </form>}
//       {show && <span style={{color:"green"}}>Emergency Data Added Successfully</span>}
//     </div>
//   );
// };

// export default EmergencyContact;
