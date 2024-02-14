import styled from "styled-components";

export const Restaurant = styled.div`
    display: flex;
    //flex-direction: column;
    justify-content: center;
    //align-items: center;
    //height: 100vh;
    background-color: #f2f2f2;
`

export const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 10%;
`

export const RestaurantInfo = styled.div`
    //text-align: center;
    //margin: 20px 0;
    margin-left: auto;
    margin-bottom: auto;
    margin-right: auto;
`

export const BookingButton = styled.button`
    padding: 10px 20px;
    background-color: #4CAF50; 
    color: white;
    border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    `