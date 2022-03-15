import React,{useState} from "react";
import Navbar from "../Navbar";
import {Link} from "react-router-dom";
const DailyAttendance = () => {
    const [entry,setEntry] = useState(false);
    const [exit,setExit] =useState(false)
    const [msg,setMsg] =useState(false);
    const date= new Date();
    var dates=date.getDate()+"/"+ date.getMonth()+"/"+date.getFullYear();
    const times = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    const[datesData,setDatesData]=useState(dates);
    const[timesData,setTimesData]=useState(times);
    
    const entryHandler = () =>{
       setEntry(true);
       localStorage.setItem("datesdata",datesData);
      localStorage.setItem("timesdata",timesData)
    };
    const exitHandler = () =>{
      setExit(true);
      setMsg(true);
    };
    return (
      <div style={{textAlign:"center"}}>
        <Navbar />
        <span style={{ textDecoration: "underline" }}>Daily Attendance</span>
        <hr />
        <h3 style={{color:"green"}}>{entry && !msg && "Successfully Checked in"}</h3>
        <h3 style={{color:"red"}}>{exit && msg && "Successfully Checked out"}</h3>
        <button onClick={entryHandler}>CheckIn</button>
        <button onClick={exitHandler}>CheckOut</button>
        <table style={{marginLeft:"500px"}}>
          <thead>
            <tr>
              <td><h3>CheckinTime </h3></td>
              <td><h3>CheckOutTime </h3></td>
              <td><h3>Status</h3></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{entry && dates+"-"+times}</td> */}
              <td>{entry && localStorage.getItem("datesdata")+"-"+localStorage.getItem("timesdata")}</td>
              <td>{exit && dates+"-"+times}</td>
              <td>{!exit?"":"Present"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
};

export default DailyAttendance;
