import styled from "styled-components";

export const StyledMainPlace = styled.div`
    //width: 1060px;
    //height: 1081px;
    //flex-shrink: 0;
    display: grid;
    //place-content: center;
    grid-template-rows: auto auto; /* 2 строки */
    border: 2px solid black; /* черная рамка */
    border-radius: 5px;
    background:  #FFF;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
`

export const StyledEstablishmentList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-content: center;
    grid-template-rows: auto auto; /* 2 строки */
    border-radius: 5px;
    background:  #FFF;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
`

export const StyledComponents = styled.div`
    //width: 286px;
    //height: 320px;
    top: 479px;
    left: 41px;
    border-radius: 5px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
`
export const StyledButton = styled.button`
    width: 166px;
    height: 52px;
    padding: 10px 20px 10px 20px;
    border-width: 0px;
    background-color: white;

    color: #333;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    font: Segoe UI;
`
