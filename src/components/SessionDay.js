import styled from "styled-components"


export default function SessionDay(props) {
    const abrev = props.weekday.slice(0,3).toUpperCase();
    const data = props.date.slice(0,5).toUpperCase();

    function selectSessionDay(weekday, date, showtimes) {
        props.setSelectedSessionDay({weekday, date, showtimes})
      }
    //   console.log(props.selectedSession)
    return(
        <>
        <DayContainer onClick={() => selectSessionDay(props.weekday, props.date, props.showtimes)}>
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
color: #E8833A;
}
p {
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 17px;
color: #E8833A
}
`
