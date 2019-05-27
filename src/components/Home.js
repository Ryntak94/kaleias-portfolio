import React, { Component } from "react";
import TriangleLeft from "./TriangleLeft.js";
import TriangleRight from "./TriangleRight.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2%;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -3.9%;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pics: []
    };
  }
  render() {
    return (
      <div>
        <Container>
          <TriangleLeft />
          <TriangleRight />
        </Container>
        <Container2>
          <TriangleLeft />
          <TriangleRight />
          <TriangleLeft />
          <TriangleRight />
        </Container2>
        <Container2>
          <TriangleRight />
          <TriangleLeft />
          <TriangleRight />
          <TriangleLeft />
        </Container2>
        <Container2>
          <TriangleLeft />
          <TriangleRight />
          <TriangleLeft />
          <TriangleRight />
        </Container2>
        <Container2>
          <TriangleLeft />
          <TriangleRight />
        </Container2>
        <Container2>
          <TriangleLeft />
          <TriangleRight />
          <TriangleLeft />
          <TriangleRight />
        </Container2>
        <Container2>
          <TriangleRight />
          <TriangleLeft />
          <TriangleRight />
          <TriangleLeft />
        </Container2>
        <Container2>
          <TriangleLeft />
          <TriangleRight />
          <TriangleLeft />
          <TriangleRight />
        </Container2>
        <Container2>
          <TriangleLeft />
          <TriangleRight />
        </Container2>
      </div>
    );
  }
}

export default Home;
