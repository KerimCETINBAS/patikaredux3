import { useState } from 'react'
import StartPage from "./pages/start.page"
import GamePage from "./pages/game.page"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<StartPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
