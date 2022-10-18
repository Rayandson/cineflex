import Movie from "./Movie"
import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import gif from "../assets/img/Rolling2.gif"
import bg from "../assets/img/cine-background.jpg"

export default function MoviesPage(props) {
    const [movies, setMovies] = useState(undefined);
    
    useEffect(() => {
        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        .then((resp) => setMovies(resp.data))
    },[])
    if(movies === undefined) {
        return(
        <Conteudo>
            <Gif src={gif}/>
        </Conteudo>)
    } else {
    return(
        <Conteudo>
        <Heading>
        <h1>Selecione o filme</h1> 
        </Heading>   
        <MoviesContainer>
        {movies.map((movie) =><Link to={`./sessions/${movie.id}`}><Movie id={movie.id} url={movie.posterURL} title={movie.title} sinopse={movie.overview} setSinopse={props.setSinopse} setMovie={props.setMovie}/></Link> )}
        </MoviesContainer>
        </Conteudo>
    )
    }
}

const Heading = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
`

const Conteudo = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
display: flex;
flex-direction: column;
align-items: center;
/* background: url(${bg});
background-size: 950px; */
    h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 22px;
    font-weight: 400;
    color: #FFFFFF
    }
/* @media (max-width: 450px) {
    background-size: 550px;
    background-repeat: no-repeat;
} */
`
const Gif = styled.img`
width: 50px;
margin-top: 40vh;
`

const MoviesContainer = styled.div`
width: 1132px;
display: flex;
justify-content: flex-start;
gap: 30px;
flex-wrap: wrap;
padding-bottom: 50px;
@media(max-width:450px) {
    width: 95vw; 
    justify-content: center;
}
`