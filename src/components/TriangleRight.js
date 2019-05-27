import styled from "styled-components";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const TriangleR = styled.img`
  width: 100px;
  height: 100px;
  clip-path: polygon(100% 50%, 0 0, 0 100%);
  margin: 0.2%;
  position: relative;
`;

class TriangleRight extends Component {
  constructor(props) {
    super(props);
  }
  onClickHandler = ({ target }) => {
    this.props.history.push(`/project/${this.props.id}`);
  };
  render() {
    return (
      <TriangleR
        onClick={this.onClickHandler}
        src="https://placekitten.com/g/100/100"
      />
    );
  }
}

export default withRouter(TriangleRight);
