import styled from "styled-components"
import { useNavigate } from "react-router-dom";

export default function Movie(props) {
    const navigate = useNavigate();
    
    function selectMovie() {
        
        props.setMovie(props.title)
        navigate(`./sessions/${props.id}`)
        window.scrollTo(0, 0);
    }
    return(
        <>
        <Poster src={props.url} onClick={selectMovie} />
        </>
    )
}

const Poster = styled.img`
width:129px;
height: 193px;
`