import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "antd/dist/antd.less"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("App"));

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)