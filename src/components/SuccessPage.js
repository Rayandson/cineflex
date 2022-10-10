import styled from "styled-components";


export default function SuccessPage(props) {
    console.log(props)
    let arrayOrdenado = props.seats;
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
        <p>{props.date} - {props.time}</p>
        </StyledDiv>
        <StyledDiv>
        <h2>Ingressos</h2>
        {arrayOrdenado.map((numero) => <p>Assento {numero}</p>)}
        </StyledDiv>
        <StyledDiv>
        <h2>Comprador:</h2>
        <p>Nome: {props.nome}</p>
        <p>CPF: {props.cpf}</p>
        </StyledDiv>
        <Botao>Voltar pra Home</Botao>
        </Conteudo>
        </>
    )
}

const Conteudo = styled.div`
margin-top: 67px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
    h1 {
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #247A6B;

    }
    @media (max-width:450px) {
        margin-bottom: 115px;
    }
`

const Heading = styled.div`
width: 100%;
height: 110px;
background-color: #FFFFFF;
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
align-items: flex-start;
padding-left: 25px;
h2 {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
color: #293845;
margin-bottom: 10px;
}

`

const Botao = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #FFFFFF;
border: none;

`