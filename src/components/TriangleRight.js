import styled from "styled-components";
import React, { Component } from "react";

const TriangleR = styled.img`
  width: 100px;
  height: 100px;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
  margin: 0.2%;
`;

class TriangleRight extends Component {
  constructor(props) {
    super(props);
  }
  mouseOverHandler = () => {
    console.log("clicked");
  };
  render() {
    return (
      <TriangleR
        onClick={() => this.onClickHandler()}
        src="https://placekitten.com/g/100/100"
      />
    );
  }
}

export default TriangleRight;
