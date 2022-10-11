import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Session from "./Session"
import { useParams} from "react-router-dom"
import gif from "../assets/img/Rolling2.gif"

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
        <Conteudo>
        <Heading>
        <h1>Selecione o horário:</h1> 
        </Heading>
        {sessions.days.map((s) => <Session weekday={s.weekday} date={s.date} showtimes={s.showtimes} setDate={props.setDate} /> )}
        <Footer>
            <ImgDiv>
            <img src={sessions.posterURL} />
            </ImgDiv>
            <p>{sessions.title}</p>
        </Footer>
        </Conteudo>
        </>
    )
    } else {
        return (
        <Conteudo>
            <Gif src={gif}/>
        </Conteudo>)
    }
}

const Conteudo = styled.div`
margin-top: 67px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
    h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    }
    @media (max-width:450px) {
        margin-bottom: 115px;
    }
`
const Gif = styled.img`
width: 50px;
margin-top: 40vh;
`

const Heading = styled.div`
width: 80%;
height: 110px;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
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
    color: #293845;
  }

  @media (max-width: 450px) {
    justify-content: flex-start;
    height: 100px;
  }
`;

const ImgDiv = styled.div`
  width: 64px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-right: 14px;
`;