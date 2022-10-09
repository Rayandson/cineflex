import styled from "styled-components"

export default function Movie(props) {
    return(
        <>
        <Poster src={props.url} />
        </>
    )
}

const Poster = styled.img`
width:129px;
height: 193px;
`