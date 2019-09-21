import React from "react";
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: Yellow;
`;




export default function Header() {
  return (
    <header className="ui centered">
      <Title className="ui center">Rick &amp; Morty Fan Page</Title>
    </header>
  );
}
