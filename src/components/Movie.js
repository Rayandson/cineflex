import styled from "styled-components"

export default function Movie(props) {
    return(
        <>
        <Poster src={props.url} onClick={() => props.setMovie(props.title)} />
        </>
    )
}

const Poster = styled.img`
width:129px;
height: 193px;
`