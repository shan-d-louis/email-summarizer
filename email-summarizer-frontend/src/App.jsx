import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './Login'
import Success from './Success'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/success" element={<Success/>}/>
    </Routes>
    </>
  )
}

export default App