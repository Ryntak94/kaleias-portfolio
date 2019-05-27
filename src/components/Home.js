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
          <TriangleLeft id={1} />
          <TriangleRight id={2} />
        </Container>
        <Container2>
          <TriangleLeft id={3} />
          <TriangleRight id={4} />
          <TriangleLeft id={5} />
          <TriangleRight id={6} />
        </Container2>
        <Container2>
          <TriangleRight id={7} />
          <TriangleLeft id={8} />
          <TriangleRight id={9} />
          <TriangleLeft id={10} />
        </Container2>
        <Container2>
          <TriangleLeft id={11} />
          <TriangleRight id={12} />
          <TriangleLeft id={13} />
          <TriangleRight id={14} />
        </Container2>
        <Container2>
          <TriangleLeft id={15} />
          <TriangleRight id={16} />
        </Container2>
        <Container2>
          <TriangleLeft id={17} />
          <TriangleRight id={18} />
          <TriangleLeft id={19} />
          <TriangleRight id={20} />
        </Container2>
        <Container2>
          <TriangleRight id={21} />
          <TriangleLeft id={22} />
          <TriangleRight id={23} />
          <TriangleLeft id={24} />
        </Container2>
        <Container2>
          <TriangleLeft id={25} />
          <TriangleRight id={26} />
          <TriangleLeft id={27} />
          <TriangleRight id={28} />
        </Container2>
        <Container2>
          <TriangleLeft id={29} />
          <TriangleRight id={30} />
        </Container2>
      </div>
    );
  }
}

export default Home;
