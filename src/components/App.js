import NavBar from "./NavBar"
import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MoviesPage from "./MoviesPage"
import SessionsPage from "./SessionsPage"
import SeatsPage from "./SeatsPage"
import SuccessPage from "./SuccessPage";
import styled from "styled-components";
import bg from "../assets/img/cine-background.jpg"

export default function App() {
    const [movie, setMovie] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [date, setDate] = useState("")
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [time, setTime] = useState("");
    const [seats, setSeats] = useState([])
    const [option, setOption] = useState(1);
    const [selectedSessionDay, setSelectedSessionDay] = useState(undefined)
    return(
    <BrowserRouter>
    <AppContainer>
    <NavBar />
    <Routes>
        <Route path="/" element={<MoviesPage movie={movie} setMovie={setMovie} setSinopse={setSinopse} />}/>
        <Route path="/sessions/:movieId" element={<SessionsPage movie={movie} sinopse={sinopse} setDate={setDate} selectedSessionDay={selectedSessionDay} setSelectedSessionDay={setSelectedSessionDay} option={option} setOption={setOption} />} />
        <Route path="/seats/:sessionId" element={<SeatsPage nome={nome} setNome={setNome} cpf={cpf} setCpf={setCpf} setTime={setTime} seats={seats} setSeats={setSeats}/>} />
        <Route path="/success" element={<SuccessPage movie={movie} date={date} time={time} nome={nome} cpf={cpf} seats={seats} selectedSessionDay={selectedSessionDay}/>} />
    </Routes>
    </AppContainer>
    </BrowserRouter>
    )
}
const AppContainer = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${bg});
background-size: 1400px;
background-color: black;
@media (max-width: 450px) {
    background-size: 550px;
    background-repeat: no-repeat;
}
`