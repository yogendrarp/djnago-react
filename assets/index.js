import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";


// ReactDOM.render(
//     <EmployeeApplication/>,
//     document.getElementById('js-framework-home')
// );
const root = createRoot(document.getElementById('js-framework-home'));
root.render(<App/>);