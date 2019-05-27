import styled from "styled-components";
import React, { Component } from "react";

const TriangleL = styled.img`
  width: 100px;
  height: 100px;
  clip-path: polygon(100% 100%, 100% 0, 0 50%);
  margin: 0.2%;
`;

class TriangleLeft extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TriangleL src="https://placekitten.com/100/100" />;
  }
}

export default TriangleLeft;
