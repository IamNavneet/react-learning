import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", {id:"heading", className:"colors"}, [
//     React.createElement("div", {}, [React.createElement("h1", {}, "div 1 h1 tag"), React.createElement("h2", {}, "div 1 h2 tag")]),
//     React.createElement("div", {}, [React.createElement("h1", {}, "div 2 h1 tag"), React.createElement("h2", {}, "div 1 h2 tag")])
// ])

const jsxHeading = <h1 id="heading">This is Jsx code</h1>;

const JsxHeadingComponent = () => {
    return <h1>this is jsx heading</h1>
}

const title = (
    <h2 className="colors"> this is title and it is a react element</h2>
)

const HeadingComponent = () =>{
    return (
        <>
        {title}
        <h1>This is composition component </h1>
        <JsxHeadingComponent />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

