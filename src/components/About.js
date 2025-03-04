import React from "react";
import User from "./User";

// const About = () => {
//   return (
//     <>
//       <h1>About </h1>
//       <User name="Chandani" location="dehradun" />
//     </>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent componentDidMount ");
  }
  render() {
    // console.log("parent render");
    return (
      <>
        <h1>About </h1>
        <User name="first" location="dehradun" />
        {/* <User name="second" location="dehradun" /> */}
        {/* <User name="third" location="dehradun" /> */}
      </>
    );
  }
}
export default About;
