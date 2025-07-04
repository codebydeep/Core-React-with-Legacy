// Chapter 1
// const App = () => {
//     return React.createElement(
//         "h1", 
//         {class: "test"},
//         React.createElement(
//             "hi", {},
//             "Chai, Chill and React-18"
//         ) 
//     )
// }

// const container = document.getElementById("root")

// // // ----------------------------------------------------
// // React ka Extension in Browser -> ReactDOM
// const root = ReactDOM.createRoot(container)
// root.render(React.createElement(App))




// Chapter 2
import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"
const App = () => {
    return React.createElement(
        "div", 
        {class: "test"},
        React.createElement(
            "hi", {},
            "Chai, Chill and React-19"
        ) 
    )
}

const container = document.getElementById('root');


// ----------------------------------------------------
// React ka Extension in Browser -> ReactDOM
const root = ReactDOM.createRoot(container)
root.render(React.createElement(App))