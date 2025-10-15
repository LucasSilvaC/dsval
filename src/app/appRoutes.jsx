import Lobby from "../pages/lobby/lobby"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Lobby />} />
      </Routes>
    </Router>
  )
}