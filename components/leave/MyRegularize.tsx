import React from "react";
import Navbar from "../Navbar";
class MyRegularize extends React.Component<any,any>{
  data = localStorage.getItem("regularize");
  render(){
  if (!this.data)
    {return (
      <div>
        <Navbar />
        <span style={{ textDecoration: "underline" }}>My Regularization</span>
        <hr />
        <span style={{ color: "green" }}>Nothing in Regularizartion</span>
      </div>
    );
    } 
  return (
    <>
      <Navbar />
      <span style={{ textDecoration: "underline" }}>My Regularization</span>
      <hr />
      <span>{this.data}</span>
    </>
  );
};
}
export default MyRegularize;
// import React from "react";
// import Navbar from "../Navbar";
// const MyRegularize = () => {
//   const data = localStorage.getItem("regularize");
//   if (!data)
//     return (
//       <div>
//         <Navbar />
//         <span style={{ textDecoration: "underline" }}>My Regularization</span>
//         <hr />
//         <span style={{ color: "green" }}>Nothing in Regularizartion</span>
//       </div>
//     );
//   return (
//     <>
//       <Navbar />
//       <span style={{ textDecoration: "underline" }}>My Regularization</span>
//       <hr />
//       <span>{data}</span>
//     </>
//   );
// };

// export default MyRegularize;
