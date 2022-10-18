import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Seat from "./Seat";
import gif from "../assets/img/Rolling2.gif"
import bg from "../assets/img/cine-background.jpg"


export default function SeatsPage(props) {
  const { sessionId } = useParams();
  const [seatsPage, setSeatsPage] = useState(undefined);
  const [seats, setSeats] = useState([]);
  const [seatsId, setSeatsId] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`
    );
    promise.then((resp) => {
      setSeats(resp.data.seats);
      setSeatsPage(resp.data);
      props.setTime(resp.data.name)
    });
    promise.catch((erro) => console.log(erro));
  }, []);

  function reserve() {
    const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {ids: seatsId, nome: props.nome, cpf: props.cpf})
    requisicao.then((r) => console.log(r));
    requisicao.catch((erro) => console.log(erro))
    navigate(`/success`);
    window.scrollTo(0, 0);
  }

  if (seatsPage !== undefined) {
    return (
      <ConteudoContainer>
      <Conteudo>
        <Heading>
          <h1>Selecione o(s) assento(s):</h1>
        </Heading>
        <SeatsContainer>
          {seats.map((s) => (
            <Seat id={s.id} name={s.name} seats={props.seats} setSeats={props.setSeats} isAvailable={s.isAvailable} seatsId = {seatsId} setSeatsId={setSeatsId} />
          ))}
        </SeatsContainer>
        <SeatsDescription>
          <DescriptionDiv>
            <SeatDescription color="#1AAE9E" border="1px solid #0E7D71" />
            <p>Selecionado</p>
          </DescriptionDiv>
          <DescriptionDiv>
            <SeatDescription color="#C3CFD9" border="1px solid #7B8B99" />
            <p>Disponível</p>
          </DescriptionDiv>
          <DescriptionDiv>
            <SeatDescription color="#FBE192" border="1px solid #F7C52B" />
            <p>Indisponível</p>
          </DescriptionDiv>
        </SeatsDescription>
        <Inputs onSubmit={reserve}>
          <InputContainer>
            <p>Nome do comprador</p>
            <input required placeholder="Digite seu nome..." onChange={(e) => props.setNome(e.target.value)} value={props.nome}></input>
          </InputContainer>
          <InputContainer>
            <p>CPF do comprador</p>
            <input required type="number" placeholder="Digite seu CPF..." onChange={(e) => props.setCpf(e.target.value)} value={props.cpf}></input>
          </InputContainer>
          <StyledButton type="submit">Reservar assento(s)</StyledButton>
        </Inputs>
        </Conteudo>
        <Footer>
          <ImgDiv>
            <img src={seatsPage.movie.posterURL} />
          </ImgDiv>
          <div>
            <p>{seatsPage.movie.title}</p>
            <p>
              {seatsPage.day.weekday} - {seatsPage.name}
            </p>
          </div>
        </Footer>
      </ConteudoContainer>
    );
  } else return (
    <Conteudo>
        <Gif src={gif}/>
    </Conteudo>)
}

const Conteudo = styled.div`
height: calc(100vh - 167px);
overflow:scroll;
 display: flex;
  flex-direction: column;
  align-items: center;
/*box-sizing: content-box; */

&::-webkit-scrollbar {
  display: none;
}
`

const ConteudoContainer = styled.div`
min-height: calc(100vh - 67px);
  margin-top: 67px;
  display: flex;
 justify-content: center;
  /* margin-bottom: 100px; */
  /* background: url(${bg});
  background-size: 1400px; */
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: #FFFFFF
  }
  /* @media (max-width:450px) {
    background-size: 550px;
        background-repeat: no-repeat;
    } */
`;

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
  flex-shrink: 0;
`;

const SeatsContainer = styled.div`
  width: 636px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  /* background-color: blue; */
  @media (max-width: 450px) {
    width: 352px;
    gap: 8px;
  }
`;

const SeatsDescription = styled.div`
  width: 290px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
`;
const DescriptionDiv = styled.div`
  width: 95px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    color: #FFFFFF
  }
`;

const SeatDescription = styled.div`
  width: 26px;
  height: 26px;
  background: ${(props) => props.color};
  border: ${(props) => props.border};
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inputs = styled.form`
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 42px;
`;

const InputContainer = styled.div`
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
  }
  input {
    width: 600px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    padding-left: 7px;
    font-weight: 400;
    font-size: 18px;
    &::placeholder {
        font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #AFAFAF;

    }
    @media (max-width: 450px) {
      width: 327px;
    }
  }
`;

const StyledButton = styled.button`
  width: 225px;
  height: 42px;
  background: #e8833a;
  border: none;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #ffffff;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-shrink: 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ;450px) {
    margin-bottom: 0px;
  }
`;
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
