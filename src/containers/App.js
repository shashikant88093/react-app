import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Persons from "../components/persons/Persons";

class App extends Component {
  state = {
    persons: [
      {
        id: "asdf1",
        name: "shashikant",
        age: 22
      },
      {
        id: "asdf2",
        name: "chandan",
        age: 22
      },
      {
        id: "asdf3",
        name: "krishna",
        age: 0.3
      }
    ],
    showPerson: false
  };

  onchange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  ontoggle = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };

  render() {
    let style = {
      backgroundColor: "red",
      color: "white",
      padding: "4px 5px",
      border: "1px solid red",
      marginBottom: "10px",
      borderRadius: "5px",
      curser: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black",
        border: "1px solid lightgreen"
      }
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler} 
          onchanged={this.onchanged}/>
         
        </div>
      );
      style.background = "red";
      style[":hover"] = {
        backgroundColor: "lightgreen",
        color: "black",
        border: "1px solid lightgreen"
      };
    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }
    return (
      <StyleRoot>
        <>
          <p className={classes.join(" ")}>Hello bhai log</p>
          <button style={style} onClick={this.ontoggle}>
            Click Me!
          </button>
          {persons}
        </>
      </StyleRoot>
    );
  }
}

export default Radium(App);
