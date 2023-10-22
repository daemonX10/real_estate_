/* eslint-disable no-unused-vars */
import { BrowserRouter , Router, Route, Routes} from 'react-router-dom'


// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
  )
}
