import React, { Component } from "react";
import "./App.css";
import Radium,{StyleRoot} from "radium";
import Person from "../components/persons/Person/Person";

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
      curser: 'pointer',
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
          {this.state.persons.map((person, index) => {
            return (
              <Person
                onchange={event => this.onchange(event, person.id)}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
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
