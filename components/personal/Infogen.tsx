
import React, { useState } from "react";
import Navbar from "../Navbar";

class Infogen extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      skillexp: "",
      skillknow: "",
      yearofexp: "",
      resume: "",
      certificate: "",
      show:false
    }
  }
  skillexpHandler = (e: any) => {
    this.setState({skillexp:e.target.value})
  };
   skillknowHandler = (e: any) => {
    this.setState({skillknow:e.target.value})
  };
   yearofexpHandler = (e: any) => {
    this.setState({yearofexp:e.target.value})
  };
   certificateHandler = (e: any) => {
    this.setState({certificate:e.target.value})
  };
   resumeHandler = (e: any) => {
    this.setState({resume:e.target.value})
  };
   infoDataSubmitHandler = () => {
    localStorage.setItem("infodata", JSON.stringify(this.state));
    this.setState({show:true})
  };
  render(){
  return (
    <div>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>
        Personal Information Details
      </span>
      <hr />
      {!this.state.show && (
        <form onSubmit={this.infoDataSubmitHandler}>
          <span>Skill(Experience):- </span>
          <input
            type="text"
            name="skillexp"
            style={{ margin: "10px" }}
            value={this.state.skillexp}
            onChange={this.skillexpHandler}
          />
          <br />
          <span>Skill(Knowledge):- </span>
          <input
            type="text"
            name="skillknow"
            style={{ margin: "10px" }}
            value={this.state.skillknow}
            onChange={this.skillknowHandler}
          />
          <br />
          <span>Years Of Experience:- </span>
          <input
            type="text"
            name="yearofexp"
            style={{ margin: "10px" }}
            value={this.state.yearofexp}
            onChange={this.yearofexpHandler}
          />
          <br />
          <span>Resume:- </span>
          <input
            type="file"
            name="resume"
            accept="application/pdf"
            style={{ margin: "10px" }}
            value={this.state.resume}
            onChange={this.resumeHandler}
          />
          <br />
          <span>Certification(Certification Name:Date):- </span>
          <input
            type="text"
            name="certificate"
            style={{ margin: "10px" }}
            value={this.state.certificate}
            onChange={this.certificateHandler}
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
          <br />
        </form>
      )}
      {this.state.show && <span style={{ color: "green" }}>Infogen data added successfully</span>}
      {this.state.show && <table style={{marginLeft:"300px"}}>
        <thead>
          <tr>
            <td><h3>Skill Experience </h3></td>
            <td><h3>Skill knowledge </h3></td>
            <td><h3>Year Of Experience </h3></td>
            <td><h3>Resume </h3></td>
            <td><h3>Certificate </h3></td>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.skillexp}</td>
              <td>{this.state.skillknow}</td>
              <td>{this.state.yearofexp}</td>
              <td>{this.state.resume}</td>
              <td>{this.state.certificate}</td>
            </tr>
          </tbody>
        </table>}
    </div>
  );
};
}
export default Infogen;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const infodata = () => {
//   const data = localStorage.getItem("infodata");
//   if (!data)
//     return {
//       skillexp: "",
//       skillknow: "",
//       yearofexp: "",
//       resume: "",
//       certificate: "",
//     };
//   return JSON.parse(data);
// };
// const Infogen = () => {
//   const [show, setShow] = useState(false);
//   const [infogenData, setInfogenData] = useState(infodata);
//   const skillexpHandler = (e: any) => {
//     setInfogenData({ ...infogenData, skillexp: e.target.value });
//   };
//   const skillknowHandler = (e: any) => {
//     setInfogenData({ ...infogenData, skillknow: e.target.value });
//   };
//   const yearofexpHandler = (e: any) => {
//     setInfogenData({ ...infogenData, yearofexp: e.target.value });
//   };
//   const certificateHandler = (e: any) => {
//     setInfogenData({ ...infogenData, certificate: e.target.value });
//   };
//   const resumeHandler = (e: any) => {
//     setInfogenData({ ...infogenData, resume: e.target.value });
//   };
//   const infoDataSubmitHandler = () => {
//     localStorage.setItem("infodata", JSON.stringify(infogenData));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>
//         Personal Information Details
//       </span>
//       <hr />
//       {!show && (
//         <form onSubmit={infoDataSubmitHandler}>
//           <span>Skill(Experience):- </span>
//           <input
//             type="text"
//             name="skillexp"
//             style={{ margin: "10px" }}
//             value={infogenData.skillexp}
//             onChange={skillexpHandler}
//           />
//           <br />
//           <span>Skill(Knowledge):- </span>
//           <input
//             type="text"
//             name="skillknow"
//             style={{ margin: "10px" }}
//             value={infogenData.skillknow}
//             onChange={skillknowHandler}
//           />
//           <br />
//           <span>Years Of Experience:- </span>
//           <input
//             type="text"
//             name="yearofexp"
//             style={{ margin: "10px" }}
//             value={infogenData.yearofexp}
//             onChange={yearofexpHandler}
//           />
//           <br />
//           <span>Resume:- </span>
//           <input
//             type="file"
//             name="resume"
//             accept="application/pdf"
//             style={{ margin: "10px" }}
//             value={infogenData.resume}
//             onChange={resumeHandler}
//           />
//           <br />
//           <span>Certification(Certification Name:Date):- </span>
//           <input
//             type="text"
//             name="certificate"
//             style={{ margin: "10px" }}
//             value={infogenData.certificate}
//             onChange={certificateHandler}
//           />
//           <br />
//           <input
//             type="submit"
//             value="Submit Data"
//             style={{
//               backgroundColor: "cornflowerblue",
//               marginTop: "10px",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}
//           />
//           <br />
//         </form>
//       )}
//       {show && <span style={{ color: "green" }}>Infogen data added successfully</span>}
//     </div>
//   );
// };

// export default Infogen;
