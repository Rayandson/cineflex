import { useEffect } from "react";
import styled from "styled-components"


export default function SessionDay(props) {
    const abrev = props.weekday.slice(0,3).toUpperCase();
    const data = props.date.slice(0,5).toUpperCase();
    let weekday = props.weekday;
    let date = props.date;
    let showtimes = props.showtimes;
    
    useEffect(() => {
        if(props.index === 0 && props.selectSessionDay === undefined) {
            props.setSelectedSessionDay({weekday, date, showtimes})
        }
    }, [])
    

    function selectSessionDay(weekday, date, showtimes) {
        props.setSelectedSessionDay({weekday, date, showtimes})
        props.setDayIndex(props.index);
      }
    //   console.log(props.selectedSession)
    return(
        <>
        <DayContainer index={props.index} dayIndex={props.dayIndex} onClick={() => selectSessionDay(weekday, date, showtimes)}>
        <p>{abrev}</p>
        <p>{data}</p>
        </DayContainer>
        </>
    )
}

const DayContainer = styled.div`
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-shrink: 0;
p:first-child {
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: ${props => (props.index === props.dayIndex) ? "#E8833A" : "#C5C5C5"}; 
transition: color 0.2s;
}
p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17px;
color: ${props => (props.index === props.dayIndex) ? "#E8833A" : "#C5C5C5"}; 
transition: color 0.2s;
}
`
