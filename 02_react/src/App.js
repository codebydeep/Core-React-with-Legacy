// Chapter 3
import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"


// const Chai = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, "Masala Chai"),
//         React.createElement("p", {}, "Ginger Chai"),
//     ])
// };

// Also like this ->

const Chai = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.cost),
    ])
};


// const App = () => {
//     return React.createElement(
//         "div", 
//         {class: "test"},
//         [
//             React.createElement(
//             "hi", {}, "Chai, Variations by ChaiCode"),
            
//             React.createElement(Chai),
//             React.createElement(Chai),
//             React.createElement(Chai),
//             React.createElement(Chai)
//         ]
//     )
// }

const App = () => {
    return React.createElement(
        "div", 
        {class: "test"},
        [
            React.createElement(
            "hi", {}, "Chai, Variations by ChaiCode"),
            
            React.createElement(Chai, {
                name: "Masala Chai",
                cost: "1000"
            }),
            React.createElement(Chai, {
                name: "Ginger Chai",
                cost: "1000"
            }),
            React.createElement(Chai, {
                name: "Lemon Chai",
                cost: "1000"
            }),
            React.createElement(Chai, {
                name: "Ice Chai",
                cost: "1000"
            })
        ]
    )
}

const container = document.getElementById('root');


// ----------------------------------------------------
// React ka Extension in Browser -> ReactDOM
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))