import React from "react";

export default function CharacterCard(props) {
  //return <span>todo: character</span>;
  console.log(props)
  return (
    <div>
      <img src={props.image} />
      <div>Name: {props.name}</div>
      <div>Species: {props.species}</div>
      <div>Status: {props.status}</div>

    </div>
  )
}
