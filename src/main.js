import React from "react"
import ReactDOM from "react-dom/client"

// react 有两种路由模式，一种是BrowserRouter、一种是HashRouter。
// BrowserRouter会见厅URL的变化，当url变更事他将会使浏览器显示相应的页面
import { BrowserRouter } from "react-router-dom"

import "antd/dist/antd.less"
import App from "./App"
import "./style/common.css"

// 创建来自index.html的根标签
const root = ReactDOM.createRoot(document.getElementById("App"));
// 渲染根标签
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)