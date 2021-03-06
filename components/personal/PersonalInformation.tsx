import React, { useState } from "react";
import Navbar from "../Navbar";

class PersonalInformation extends React.Component<any,any> {
  constructor(props:any){
    super(props);
    this.state = {
      employeecode: "",
      firstname: "",
      middlename: "",
      lastname: "",
      gender: "",
      dateofbirth: "",
      mobileno: "",
      emailid: "",
      address: "",
      passportno: "",
      bloodgroup: "",
      show:false
    }
  }
  
   employeecodeHandler = (e: any) => {
    this.setState({employeecode:e.target.value})
  };
   firstnameHandler = (e: any) => {
    this.setState({firstname:e.target.value})
  };
   middlenameHandler = (e: any) => {
    this.setState({middlename:e.target.value})
  };
   lastnameHandler = (e: any) => {
    this.setState({lastname:e.target.value});
  };
   genderHandler = (e: any) => {
    this.setState({gender:e.target.value})
  };
   dateofbirthHandler = (e: any) => {
    this.setState({dateofbirth:e.target.value})
  };
   mobilenoHandler = (e: any) => {
    this.setState({mobileno:e.target.value})
  };
  emailidHandler = (e: any) => {
    this.setState({emailid:e.target.value})
  };
   addressHandler = (e: any) => {
    this.setState({address:e.target.value})
  };
   passportnoHandler = (e: any) => {
    this.setState({passportno:e.target.value})
  };
   bloodgroupHandler = (e: any) => {
    this.setState({bloodgroup:e.target.value})
  };
   alldatasubmithandler = () => {
    localStorage.setItem("personalinformation", JSON.stringify(this.state));
    this.setState({show:true})
  };
  render(){
  return (
    <div>
      <Navbar />
      <span style={{textDecoration:"underline"}}>Personal Information Details</span>
       <hr />
      {!this.state.show && (
        <form onSubmit={this.alldatasubmithandler}>
          <span>Employee Code:- </span>
          <input
            type="text"
            value={this.state.employeecode}
            name="employeecode"
            onChange={this.employeecodeHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>FirstName:- </span>
          <input
            type="text"
            value={this.state.firstname}
            name="firstname"
            onChange={this.firstnameHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>MiddleName:- </span>
          <input
            type="text"
            value={this.state.middlename}
            name="middlename"
            onChange={this.middlenameHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>LastName:- </span>
          <input
            type="text"
            value={this.state.lastname}
            name="lastname"
            onChange={this.lastnameHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Gender:- </span>
          <input
            type="text"
            value={this.state.gender}
            name="gender"
            onChange={this.genderHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Date of Birth:- </span>
          <input
            type="text"
            value={this.state.dateofbirth}
            name="dateofbirth"
            onChange={this.dateofbirthHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Mobile No:- </span>
          <input
            type="text"
            value={this.state.mobileno}
            name="mobileno"
            onChange={this.mobilenoHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Email Id:- </span>
          <input
            type="text"
            value={this.state.emailid}
            name="emailid"
            onChange={this.emailidHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Address:- </span>
          <input
            type="text"
            value={this.state.address}
            name="address"
            onChange={this.addressHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Passport No:- </span>
          <input
            type="text"
            value={this.state.passportno}
            name="passportno"
            onChange={this.passportnoHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <span>Blood Group:- </span>
          <input
            type="text"
            value={this.state.bloodgroup}
            name="bloodgroup"
            onChange={this.bloodgroupHandler}
            style={{ marginTop: "10px" }}
          />
          <br />
          <input
            type="submit"
            value="Submit Data"
            style={{
              marginTop: "10px",
              backgroundColor: "cornflowerblue",
              color: "white",
              border: "none",
              fontSize: "15px",
            }}
          />
        </form>
      )}
      {this.state.show && <span style={{ color: "green" }}>Personal Information Added Successfully</span>}
      {this.state.show && <table style={{marginLeft:"100px"}}>
        <thead>
          <tr>
            <td><h3>Employeecode </h3></td>
            <td><h3>Firstname </h3></td>
            <td><h3>Middlename </h3></td>
            <td><h3>Lastname </h3></td>
            <td><h3>Gender </h3></td>
            <td><h3>DateOfBirth </h3></td>
            <td><h3>Mobileno </h3></td>
            <td><h3>Emailid </h3></td>
            <td><h3>Address</h3></td>
            <td><h3>Passportno</h3></td>
            <td><h3>Bloodgroup</h3></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.state.employeecode}</td>
            <td>{this.state.firstname}</td>
            <td>{this.state.middlename}</td>
            <td>{this.state.lastname}</td>
            <td>{this.state.gender}</td>
            <td>{this.state.dateofbirth}</td>
            <td>{this.state.mobileno}</td>
            <td>{this.state.emailid}</td>
            <td>{this.state.address}</td>
            <td>{this.state.passportno}</td>
            <td>{this.state.bloodgroup}</td>
          </tr>
        </tbody>
      </table> }
    </div>
  );
};
}
export default PersonalInformation;
// import React, { useState } from "react";
// import Navbar from "../Navbar";
// const formData = () => {
//   const storedValues = localStorage.getItem("personalinformation");
//   if (!storedValues)
//     return {
//       employeecode: "",
//       firstname: "",
//       middlename: "",
//       lastname: "",
//       gender: "",
//       dateofbirth: "",
//       mobileno: "",
//       emailid: "",
//       address: "",
//       passportno: "",
//       bloodgroup: "",
//     };
//   return JSON.parse(storedValues);
// };
// const PersonalInformation = () => {
//   const [personalData, setPersonalData] = useState(formData);
//   const [show, setShow] = useState(false);
//   const employeecodeHandler = (e: any) => {
//     setPersonalData({
//       ...personalData,
//       employeecode: e.target.value,
//     });
//   };
//   const firstnameHandler = (e: any) => {
//     setPersonalData({
//       ...personalData,
//       firstname: e.target.value,
//     });
//   };
//   const middlenameHandler = (e: any) => {
//     setPersonalData({
//       ...personalData,
//       middlename: e.target.value,
//     });
//   };
//   const lastnameHandler = (e: any) => {
//     setPersonalData({ ...personalData, lastname: e.target.value });
//   };
//   const genderHandler = (e: any) => {
//     setPersonalData({ ...personalData, gender: e.target.value });
//   };
//   const dateofbirthHandler = (e: any) => {
//     setPersonalData({ ...personalData, dateofbirth: e.target.value });
//   };
//   const mobilenoHandler = (e: any) => {
//     setPersonalData({ ...personalData, mobileno: e.target.value });
//   };
//   const emailidHandler = (e: any) => {
//     setPersonalData({ ...personalData, emailid: e.target.value });
//   };
//   const addressHandler = (e: any) => {
//     setPersonalData({ ...personalData, address: e.target.value });
//   };
//   const passportnoHandler = (e: any) => {
//     setPersonalData({ ...personalData, passportno: e.target.value });
//   };
//   const bloodgroupHandler = (e: any) => {
//     setPersonalData({ ...personalData, bloodgroup: e.target.value });
//   };
//   const alldatasubmithandler = () => {
//     localStorage.setItem("personalinformation", JSON.stringify(personalData));
//     setShow(true);
//   };
//   return (
//     <div>
//       <Navbar />
//       <span style={{textDecoration:"underline"}}>Personal Information Details</span>
//        <hr />
//       {!show && (
//         <form onSubmit={alldatasubmithandler}>
//           <span>Employee Code:- </span>
//           <input
//             type="text"
//             value={personalData.employeecode}
//             name="employeecode"
//             onChange={employeecodeHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>FirstName:- </span>
//           <input
//             type="text"
//             value={personalData.firstname}
//             name="firstname"
//             onChange={firstnameHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>MiddleName:- </span>
//           <input
//             type="text"
//             value={personalData.middlename}
//             name="middlename"
//             onChange={middlenameHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>LastName:- </span>
//           <input
//             type="text"
//             value={personalData.lastname}
//             name="lastname"
//             onChange={lastnameHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Gender:- </span>
//           <input
//             type="text"
//             value={personalData.gender}
//             name="gender"
//             onChange={genderHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Date of Birth:- </span>
//           <input
//             type="text"
//             value={personalData.dateofbirth}
//             name="dateofbirth"
//             onChange={dateofbirthHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Mobile No:- </span>
//           <input
//             type="text"
//             value={personalData.mobileno}
//             name="mobileno"
//             onChange={mobilenoHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Email Id:- </span>
//           <input
//             type="text"
//             value={personalData.emailid}
//             name="emailid"
//             onChange={emailidHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Address:- </span>
//           <input
//             type="text"
//             value={personalData.address}
//             name="address"
//             onChange={addressHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Passport No:- </span>
//           <input
//             type="text"
//             value={personalData.passportno}
//             name="passportno"
//             onChange={passportnoHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <span>Blood Group:- </span>
//           <input
//             type="text"
//             value={personalData.bloodgroup}
//             name="bloodgroup"
//             onChange={bloodgroupHandler}
//             style={{ marginTop: "10px" }}
//           />
//           <br />
//           <input
//             type="submit"
//             value="Submit Data"
//             style={{
//               marginTop: "10px",
//               backgroundColor: "cornflowerblue",
//               color: "white",
//               border: "none",
//               fontSize: "15px",
//             }}
//           />
//         </form>
//       )}
//       {show && <span style={{ color: "green" }}>Personal Information Added Successfully</span>}
//     </div>
//   );
// };

// export default PersonalInformation;
