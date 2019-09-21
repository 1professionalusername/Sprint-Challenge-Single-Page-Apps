import React from "react";
import styled from 'styled-components'

const Card = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: black;
`;

export default function CharacterCard(props) {
  //return <span>todo: character</span>;
  console.log(props)
  return (
    <Card>
      <img src={props.image} />
      <div>Name: {props.name}</div>
      <div>Species: {props.species}</div>
      <div>Status: {props.status}</div>

    </Card>
  )
}
