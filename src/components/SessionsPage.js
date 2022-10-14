import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Session from "./Session"
import { useParams} from "react-router-dom"
import gif from "../assets/img/Rolling2.gif"
import bg from "../assets/img/cine-background.jpg"

export default function SessionsPage(props) {
    const {movieId} = useParams();
    const [sessions, setSessions] = useState(undefined);
  
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

        promise.then((resp) => {
            setSessions(resp.data)
            console.log(resp) })
    },[])
    if(sessions !== undefined) {
    return(
        <>
        <ConteudoContainer>
        <Conteudo>
        <Heading>
        <h1>Selecione o horário:</h1> 
        </Heading>
        {/* <SessionsDiv> */}
        {sessions.days.map((s) => <Session weekday={s.weekday} date={s.date} showtimes={s.showtimes} setDate={props.setDate} /> )}
        {/* </SessionsDiv>  */}
        </Conteudo>
        <Footer>
            <ImgDiv>
            <img src={sessions.posterURL} />
            </ImgDiv>
            <p>{sessions.title}</p>
        </Footer> 
        </ConteudoContainer>
        </>
    )
    } else {
        return (
        <ConteudoContainer>
            <Gif src={gif}/>
        </ConteudoContainer>)
    }
}

const ConteudoContainer = styled.div`
min-height: calc(100vh - 67px);
margin-top: 67px;
/* margin-bottom: 100px; */
display: flex;
flex-direction: column;
align-items: center;
/* background: url(${bg});
background-size: 1400px; */
/* height: 600px;
overflow-y:scroll; */
    h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF;
    }
    /* @media (max-width:450px) {
        background-size: 550px;
        background-repeat: no-repeat;
    } */
`

const Conteudo = styled.div`
height: calc(100vh - 167px);
overflow:scroll;

&::-webkit-scrollbar {
  display: none;
}

`
const Gif = styled.img`
width: 50px;
margin-top: 40vh;
`

const Heading = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(4, 36, 63, 0.5) 0%, rgba(0, 64, 118, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;

  img {
    width: 48px;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #FFFFFF;
  }

  @media (max-width: 450px) {
    justify-content: flex-start;
    height: 100px;
  }
`;

const ImgDiv = styled.div`
  width: 57px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 14px;
`;