import styled from "styled-components"
import {useState, useEffect} from "react"
import axios from "axios"
import Session from "./Session"
import SessionDay from "./SessionDay"
import { useParams} from "react-router-dom"
import gif from "../assets/img/Rolling2.gif"
import bg from "../assets/img/cine-background.jpg"
import Poster from "./Poster"

export default function SessionsPage(props) {
    const {movieId} = useParams();
    const [sessions, setSessions] = useState(undefined);
    // console.log(props)
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

        promise.then((resp) => {
            setSessions(resp.data)
            console.log(resp) })
    },[])

    function selectSessionOption() {
      props.setOption(1);
    }

    function selectSinopseOption() {
      props.setOption(2);
    }

    if(sessions !== undefined) {
    return(
        <>
        <ConteudoContainer>
        <Conteudo>
        <Poster foto={sessions.posterURL} title={sessions.title}>
        </Poster>
        <OptionsDiv>
        <SessoesDiv onClick={selectSessionOption} option={props.option}>
        <p>Sessões</p>
        <div></div>
        </SessoesDiv>
        <SinopseDiv onClick={selectSinopseOption} option={props.option}>
        <p>Sinopse</p>
        <div></div>
        </SinopseDiv>
        </OptionsDiv>
        <SessoesContent option={props.option}>
        <SessionsDays>
        {/* {sessions.days.map((s) => <Session weekday={s.weekday} date={s.date} showtimes={s.showtimes} setDate={props.setDate} /> )} */}
        {sessions.days.map((s, index) => <SessionDay index={index} selectedSessionDay={props.selectedSessionDay} setSelectedSessionDay={props.setSelectedSessionDay} dayIndex={props.dayIndex} setDayIndex={props.setDayIndex} showtimes={s.showtimes} weekday={s.weekday} date={s.date} /> )}
        </SessionsDays> 
        <SessionContainer>
          <Session setDate={props.setDate} selectedSessionDay={props.selectedSessionDay}/>
        </SessionContainer>
        </SessoesContent>
        <SinopseContent option={props.option}>
          <div>
            <p>{props.sinopse}</p>
          </div>
        </SinopseContent>
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
    @media (max-width:450px) {
        /* background-size: 550px;
        background-repeat: no-repeat; */
    }
`

const Conteudo = styled.div`
width: 60vw;
height: calc(100vh - 167px);
overflow:scroll;

&::-webkit-scrollbar {
  display: none;
}
@media (max-width:450px) {
       width: 100vw;
    }

`
const Gif = styled.img`
width: 50px;
margin-top: 40vh;
`


const OptionsDiv = styled.div`
width: 100%;
height: 57px;
background-color: #000000;
display: flex;
@media (max-width:450px) {
       width:100vw;
    }
  
`
const SessoesDiv = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 21px;
color: ${(props) => (props.option === 1) ? "#E8833A" : "#C5C5C5"};
transition: color 0.3s;
}
div {
  width: 100%;
height: 3px;
background: #F5600B;
transform: matrix(1, 0, 0, -1, 0, 0);
position: absolute;
bottom: 0;
left: 0;
/* visibility: ${(props) => (props.option === 1) ? "visible" : "hidden"}; */
opacity: ${(props) => (props.option === 1) ? 1 : 0};
transition: opacity 0.3s;
}
`
const SinopseDiv = styled.div`
width: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 21px;
color: ${(props) => (props.option === 1) ? "#C5C5C5" : "#E8833A"};
transition: color 0.3s;
  }
  div {
  width: 100%;
height: 3px;
background: #F5600B;
transform: matrix(1, 0, 0, -1, 0, 0);
position: absolute;
bottom: 0;
left: 0;
/* visibility: ${(props) => (props.option === 1) ? "hidden" : "visible"}; */
opacity: ${(props) => (props.option === 1) ? 0 : 1};
transition: opacity 0.3s;
/* text-justify: inter-word; */
}
`
const SessionsDays = styled.div`
width: 100%;
height: 57px;
display: flex;
overflow: hidden;
background: #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.35);
`
const SessionContainer = styled.div`
width: 60%;
display: flex;
justify-content: center;
margin-bottom: 50px;
@media (max-width:450px) {
        display: initial;
        margin-bottom: 0;
    }
`

const SessoesContent = styled.div`
width: 100vw;
height: 220px;
background-color: #202020;
/* display: initial; */
display: ${(props) => (props.option === 1) ? "block" : "none"};
/* opacity: ${(props) => (props.option === 1) ? 1 : 0}; */
/* visibility: ${(props) => (props.option === 1) ? "visible" : "hidden"}; */
/* transition: opacity 3s; */

@media (max-width: 450px) {
  height: initial;
background-color: initial;
}
`
const SinopseContent = styled.div`
display: ${(props) => (props.option === 1) ? "none" : "flex"};
justify-content: center;
margin-bottom: 50px;
/* opacity: ${(props) => (props.option === 1) ? 0 : 1}; */
/* visibility: ${(props) => (props.option === 1) ? "hidden" : "visible"}; */
/* transition: opacity 3s; */
div {
  width: 92vw;
  min-height: 200px;
  background-color: #252525;
  margin-top: 25px;
  border-radius: 8px;
  padding: 15px 10px;
  box-sizing: border-box;
  opacity: 0.95;
  /* text-align: justify; */
}
p {
  font-family: "Roboto";
  font-weight: 400;
  color: #FFFFFF;
  font-size: 19px;
  /* text-justify: inter-word; */
}
@media (max-width:450px) {
        margin-bottom: 0;
    }
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