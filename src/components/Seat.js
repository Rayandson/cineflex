import { useState } from "react"
import styled from "styled-components"

export default function Seat(props) {
    const [isSelected, SetIsSelected] = useState(false)

    function select(){
        let array = props.seatsId;
        let arraySeats = props.seats;
        let index;
        // let indexSeats;
        if(props.isAvailable === true) {
        SetIsSelected(!isSelected)
        if(array.includes(props.id)) {
            index = array.indexOf(props.id);
            array.splice(index, 1);
            props.setSeatsId(array);
            arraySeats.splice(index, 1);
            props.setSeats(arraySeats)
        } else {
            array.push(props.id)
            props.setSeatsId(array);
            arraySeats.push(props.name);
            props.setSeats(arraySeats);
        }
        } else {
            alert("Esse assento não está disponível")
        }
    }

    return(
        <>
        <StyledSeat isAvailable={props.isAvailable} isSelected={isSelected} onClick={select}>
            <p>{props.name}</p>
        </StyledSeat>
        </>
    )
}

const StyledSeat = styled.div`
width: 26px;
height: 26px;
background: ${(props) => props.isSelected ? "#1AAE9E" : props.isAvailable ? "#C3CFD9" : "#FBE192"};
border: 1px solid #808F9D;
border-radius: 14px;
display: flex;
justify-content: center;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
`
