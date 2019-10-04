import React from "react";
import Radium from "radium";
const Person = props => {
  const style = {
    width:'300px',
    height:'200px',
    border : '1px solid whitesmoke',
    boxShadow: '3px 4px snow',
    borderRadius:'5px',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: '10px',

    "@media (min-width : 500px)": {
      width: "450px"
    }
  };
  return (
    <div style={style}>
      <p onClick={props.click}>
        My name is {props.name} and my age is {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.onchange} value={props.name} />
    </div>
  );
};

export default Radium(Person);
