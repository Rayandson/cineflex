import Movie from "./Movie"
import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export default function MoviesPage() {
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        let promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promise.then((resp) => setMovies(resp.data))
        // promise.then((r) => console.log(r.data))
    },[])
    if(movies === undefined) {
        return(
        <Conteudo>
            <p>Carregando...</p>
        </Conteudo>)
    } else {
    return(
        <Conteudo>
        <Heading>
        <h1>Selecione o filme:</h1> 
        </Heading>   
        <MoviesContainer>
        <div>
        {movies.map((movie) =><Link to={`./sessions/${movie.id}`}><Movie url={movie.posterURL}/></Link> )}
        </div>
        </MoviesContainer>
        </Conteudo>
    )
    }
}

const Heading = styled.div`
width: 100%;
height: 110px;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
`

const Conteudo = styled.div`
margin-top: 67px;
display: flex;
flex-direction: column;
align-items: center;
    h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    }
`
const MoviesContainer = styled.div`
div{
    /* background-color: red; */
width: 1083px;
display: flex;
justify-content: flex-start;
gap: 30px;
flex-wrap: wrap;
padding-bottom: 50px;
@media(max-width:450px) {
    width: 75vw; 
    justify-content: center;
}
}
`