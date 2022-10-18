import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/img/cine-background.jpg"


export default function SuccessPage(props) {
    const navigate = useNavigate();
    console.log(props)
    let arrayOrdenado = props.seats;
    let cpf = props.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    arrayOrdenado.sort();

    return(
        <>
        <Conteudo>
        <Heading>
        <h1>Pedido feito com sucesso!</h1> 
        </Heading>
        <StyledDiv>
        <h2>Filme e sessão</h2>
        <p>{props.movie}</p>
        <p>{props.selectedSessionDay.date} - {props.time}</p>
        </StyledDiv>
        <StyledDiv>
        <h2>Ingressos</h2>
        {arrayOrdenado.map((numero) => <p>Assento {numero}</p>)}
        </StyledDiv>
        <StyledDiv>
        <h2>Comprador:</h2>
        <p>Nome: {props.nome}</p>
        <p>CPF: {cpf}</p>
        </StyledDiv>
            <Botao onClick={() => navigate("/")}>Voltar pra Home</Botao>
        </Conteudo>
        </>
    )
}

const Conteudo = styled.div`
height: calc(100vh - 67px);
margin-top: 67px;
display: flex;
flex-direction: column;
align-items: center;

    h1 {
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #2FCF8C;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`

const Heading = styled.div`
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:450px) {
        width: 150px;
        text-align: center
    }
`

const StyledDiv = styled.div`
width: 100%;
height: 110px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2 {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #FFFFFF;
margin-bottom: 10px;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
color: #FFFFFF;

}
@media (max-width: 450px) {
    align-items: flex-start;
    h2 {
        margin-left: 25px;
    }
    p {
    margin-left: 25px;
}
}

`

const Botao = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 5px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #FFFFFF;
border: none;
margin-top: 50px;
margin-bottom: 60px;
&:hover {
    cursor: pointer;
}
`