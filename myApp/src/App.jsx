import { useState } from 'react'
import './App.css'
import View from './components/View'
import Records from './components/Records'
import Add from './components/Add'
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Welcome to React Session</h1>
      <View />
      <Routes>
        <Route path='/' element={<Records/>}></Route>
        <Route path='/add' element={<Add person={{
          fname:'anandadev',department:'CSE AI',semester:"s8"}}/>}></Route>
      </Routes>
    </>
  )
}

export default App
