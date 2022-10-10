import NavBar from "./NavBar"
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MoviesPage from "./MoviesPage"
import SessionsPage from "./SessionsPage"
import SeatsPage from "./SeatsPage"
import SuccessPage from "./SuccessPage";

export default function App() {
    const [movie, setMovie] = useState("");
    const [date, setDate] = useState("")
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [time, setTime] = useState("");
    const [seats, setSeats] = useState([])
    return(
    <BrowserRouter>
    <NavBar />
    <Routes>
        <Route path="/" element={<MoviesPage movie={movie} setMovie={setMovie}/>}/>
        <Route path="/sessions/:movieId" element={<SessionsPage setDate={setDate} />} />
        <Route path="/seats/:sessionId" element={<SeatsPage nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} setTime={setTime} seats={seats} setSeats={setSeats}/>} />
        <Route path="/success" element={<SuccessPage movie={movie} date={date} time={time} nome={nome} cpf={cpf} seats={seats}/>} />
    </Routes>
    </BrowserRouter>
    )
}