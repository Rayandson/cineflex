import styled from "styled-components"

export default function Poster(props) {
    return(
        <PosterContainer foto={props.foto}>
            <TitleContainer>
                <Title>{props.title}</Title>
                <Duration>
                    <div>
                        <p>14</p>
                    </div>
                    <p>2h 05m</p>
                </Duration>
            </TitleContainer>
        </PosterContainer>
    )
}

const PosterContainer = styled.div`
width: 100vw;
height: 259px;
background: ${(props) => `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.6) 82.29%, #000000 100%), url(${props.foto})`};
position: relative;
@media (max-width: 450px){
  background-size: 350px;
}
`
const TitleContainer = styled.div`
height: 85px;
display: flex;
flex-direction: column;
gap: 3px;
position: absolute;
bottom: 0;
left: 24px;
`
const Title = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 28px;
color: #FFFFFF;
mix-blend-mode: luminosity;
opacity: 0.8;
`
const Duration = styled.div`
height: 35px;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
    div{
        width: 30px;
        height: 30px;
        background: #F5600B;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: #FFFFFF;
        }
    }
    p {
        font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
color: #FFFFFF;
mix-blend-mode: luminosity;
opacity: 0.8;
    }
`