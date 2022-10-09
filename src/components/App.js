import NavBar from "./NavBar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MoviesPage from "./MoviesPage"
import SessionsPage from "./SessionsPage"
import SeatsPage from "./SeatsPage"

export default function App() {
    return(
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<MoviesPage />}/>
        <Route path="/sessions/:movieId" element={<SessionsPage />} />
        <Route path="/seats/:sessionId" element={<SeatsPage />} />
    </Routes>
    </BrowserRouter>
    )
}