import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the js) - parcel - Babel
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement("h1", {id: "heading"}, "Strategic Move ");

// React Element
const heading = (
    <h1 className="head" tabIndex="5">
    Hello using JSX
    </h1>
);

// React Functional Component 
const Title = () =>{
    return <h1>Hello i am a component</h1>
}

// Component Composition
const HeadingComponent =() => ( 
      <div id="container">
        <Title/>
          <h1>Namaste React functional component</h1>
      </div>
    );
 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);  
