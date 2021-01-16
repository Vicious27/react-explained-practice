import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


//React elements
const pElement = React.createElement('p', {}, 'Welcome to React!');

const headerElement = React.createElement('h1', {},
  React.createElement(
    'a',
    { "href": 'https://reactjs.org/' },
    'React.js'
  )
);


//React Components
function Header() {
  return (
    React.createElement(
      "header", { id: "main " },
      headerElement,
      pElement
    )
  )
};

// for the List component I Used ES6 arrow function
const List = () => {
  return (
    React.createElement("ul", { className: "react-links", id: "top" },
      React.createElement("li", {},
        React.createElement("a", { href: "https://reactjs.org/docs/getting-started.html" }, "React Document 1")
      ),
      React.createElement("li", {},
        React.createElement("a", { href: "https://reactjs.org/docs/components-and-props.html" },
          "React Document 2")
      ),
      React.createElement("li", {},
        React.createElement("a", { href: "https://reactjs.org/docs/rendering-elements.html" },
          "React Document 3")
      )
    )
  )
};

//React.Fragment <=== Creates Componets that return other Components that in turn return return individual elements ======= //
function App() {
  return (
    React.createElement(React.Fragment, {},
      Header(),
      List()
    )
  )
};

ReactDom.render(
  App(),
  document.getElementById("root")
);