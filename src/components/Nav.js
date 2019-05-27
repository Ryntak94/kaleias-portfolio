import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Logo = styled.img``;
const NavContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 0.5% 1%;
`;
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
  }
  onClickHandler = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <NavContainer>
        <Logo
          onClick={this.onClickHandler}
          src="https://placekitten.com/150/80"
        />
      </NavContainer>
    );
  }
}

export default Nav;
