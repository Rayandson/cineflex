import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Movie(props) {
    const navigate = useNavigate();
    
    function selectMovie() {
        
        props.setMovie(props.title)
        props.setSinopse(props.sinopse);
        navigate(`./sessions/${props.id}`)
        window.scrollTo(0, 0);
    }
    return(
        <>
        <PosterContainer>
        <Poster src={props.url} onClick={selectMovie} />
        </PosterContainer>
        </>
    )
}

const Poster = styled.img`
width:129px;
height: 193px;

`

const PosterContainer = styled.div`
width: 136px;
height: 200px;
background-color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
&:hover {
    filter: brightness(0.7);
    transition: filter, 0.4s;
}
`