import React, { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

const Home = lazy(() => import(/*webpackChunkName: "home"*/"./pages/Home")) // webpackChunkName: "home" 为懒加载的模块命名
const About = lazy(() => import(/*webpackChunkName: "about"*/"./pages/About"))
const BaseScene = lazy(() => import(/*webpackChunkName: "BaseScene"*/ './pages/BaseScene'));

function App() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path='/' element={<BaseScene />} ></Route>
            <Route path='/home' element={<Home />} ></Route>
            <Route path='/about' element={<About />} ></Route>
            <Route path='/base' element={<BaseScene />} ></Route>
          </Routes>
        </Suspense>
      </div>
    );
}

export default App