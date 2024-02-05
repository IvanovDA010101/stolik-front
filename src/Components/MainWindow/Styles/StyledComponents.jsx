import styled from "styled-components";

export const StyledMainPlace = styled.div`
    //width: 1060px;
    //height: 1081px;
    //flex-shrink: 0;
    //place-content: center;

    gap: 41px;
    justify-content: flex-start;
    flex-direction: column;
    width: 98%;
    display: flex;
    margin-bottom: 263px;

    //display: grid;
    //grid-template-rows: auto auto; /* 2 строки */
    //border: 2px solid black; /* черная рамка */
    //border-radius: 5px;
    //background:  #FFF;
    //box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
`

export const StyledEstablishmentList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-content: center;
    grid-template-rows: auto auto; /* 2 строки */
    border-radius: 5px;
    background: #FFF;
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
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: #7F7F7F;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #F2F2F2;
        color: #4A4A4A;
    }

    //width: 166px;
    //height: 52px;
    //padding: 10px 20px 10px 20px;
    //border-width: 0px;
    //background-color: white;
    //
    //color: #333;
    //font-size: 14px;
    //font-weight: bold;
    //text-transform: uppercase;
    //font: Segoe UI;
`

export const StyledText = styled.text`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: #333333;
    text-align: left;
`

export const StyledHeader = styled.nav`
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-sizing: border-box;
    display: flex;
    gap: 4px 16px;
    //margin-left: auto;
    //margin-right: auto;
    //max-width: var(--page-max-size-outer);
    padding-bottom: 4px;
    //padding-left: var(--page-side-paddings);
    //padding-right: var(--page-side-paddings);
    padding-top: 4px;
    position: relative;


    //background-color: #FFFFFF;
    //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    //border-radius: 5px;
    //display: flex;
    //align-items: center;
    //justify-content: center;
    //flex-direction: row;
    //flex-wrap: wrap;
    //padding: 2.5rem 2.5rem 2.5rem 5rem;
    //gap: 2.5rem;
`

export const HeaderImage = styled.img`
    border-radius: 35%;
    width: 200px;
    height: 60px;
    //object-fit: cover;

`
export const HeaderNavigationButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    //height: 48px;
    margin: -2px;
    overflow: hidden;
    padding: 2px;
`
export const SignButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    //height: 48px;
    margin: -2px;
    overflow: hidden;
    padding: 2px;
    margin-left: auto;
`

export const SignButton = styled.button`
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 18px;
    //color: #7F7F7F;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #FFC107;
    color: #FFFFFF;


    &:hover {
        color: #555;
        background-color: #f0f0f0;
    }
`

export const HeaderButton = styled.button`
    background-color: transparent;
    border: none;
    font-weight: bold;
    font-size: 18px;
    color: #7F7F7F;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #F5F5F5;
        color: #333333;
    }
`