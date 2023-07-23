const heading = React.createElement("div", {id:"heading", className:"colors"}, [
    React.createElement("div", {}, [React.createElement("h1", {}, "div 1 h1 tag"), React.createElement("h2", {}, "div 1 h2 tag")]),
    React.createElement("div", {}, [React.createElement("h1", {}, "div 2 h1 tag"), React.createElement("h2", {}, "div 1 h2 tag")])
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)