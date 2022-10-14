import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Session(props) {
    const navigate = useNavigate();

    function selectSession(id) {
        props.setDate(props.date)
        navigate(`/seats/${id}`)
    }
    return(
        <SessionContainer>
            <h2>{props.weekday} - {props.date}</h2>
            <BotoesDiv>
                {props.showtimes.map((t) => <Botao onClick={() => selectSession(t.id)}>{t.name}</Botao>)}
            </BotoesDiv>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
width: 100%;
height:95px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
font-family: 'Roboto', sans-serif;
margin-bottom: 40px;

 h2 {
    font-size:20px;
    font-weight: 400;
    color: #FFFFFF;
    @media (max-width: 450px) {
    margin-left: 23px;
    }
 }
 @media (max-width: 450px) {
    align-items: flex-start;
 }
`
const BotoesDiv = styled.div`
width: 80vw;
display: flex;
flex-wrap: wrap;
gap: 18px;
justify-content: center;
@media (max-width: 450px) {
    justify-content: flex-start;
    gap: 8px;
    margin-left: 23px;
}
`

const Botao = styled.button`
width: 83px;
height: 43px;
background-color: #E8833A;
color:#FFFFFF;
font-size: 18px;
font-family: 'Roboto', sans-serif;
border: none;
&:hover {
    cursor: pointer;
}
`