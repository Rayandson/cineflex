import { Link } from "react-router-dom"
import styled from "styled-components"

export default function NavBar() {
    return (
        <Header>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to="/">
            <h1>CINEFLEX</h1>
            </Link>
        </Header>
    )
}

const Header = styled.header`
width: 100%;
height: 67px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
left: 0;
top: 0;
background-color: #004B90;
color: orange;
font-family: 'Road Rage', cursive;
font-size: 46px;
font-weight: 400;
`