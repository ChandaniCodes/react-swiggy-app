import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "User",
        location: "",
      },
      // count: 0,
      // count2: 1,
    };
    console.log(this.props.name + " child constructor");
    console.log(this.state.userInfo.name);
  }

  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await response.json();

    this.setState({
      userInfo: json,
    });
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log(this.state.userInfo.name + " child render");
    // const { name, location } = this.props;
    const { name, location } = this.state.userInfo;
    return (
      <>
        <div>Name: {name}</div>
        <div>location: {location}</div>

        {/* <div>
          count: {count} {count2}
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count
        </button> */}
      </>
    );
  }
}

export default User;
