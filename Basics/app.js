const heading = React.createElement( //this method create a React element
    "h1", 
    {id: "heading", className: "header" },
    "We are learning basics of React."
)


console.log(heading); //return a Object (React Element)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);  //render() : takes the object then convert it into HTML element pass to the DOM