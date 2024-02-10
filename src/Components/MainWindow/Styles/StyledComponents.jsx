import styled from "styled-components";

export const StyledMainPlace = styled.div`
    gap: 41px;
    justify-content: flex-start;
    flex-direction: column;
    width: 98%;
    display: flex;
    margin-bottom: 263px;
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
    top: 479px;
    left: 41px;
   
    border-radius: 10px; /* Увеличьте радиус, чтобы закруглить углы */
    background: rgba(255, 255, 255, 0.8); /* Измените альфа-значение, чтобы сделать фон менее видимым */
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
    padding: 10px; /* Добавьте отступ для контента */
    overflow: hidden; /* Обрезаем излишки содержимого */
    transition: background 0.3s ease; /* Добавьте плавный переход при изменении фона */
    &:hover {
        background: rgba(255, 255, 255, 0.95); /* Измените фон при наведении */
    }
    img {
        width: 100%; /* Растягиваем изображение на всю ширину блока */ /* Закругляем верхние углы изображения */
        border-radius: 10px;
    }
    //top: 479px;
    //left: 41px;
    //border-radius: 10px;
    //background: rgba(255, 255, 255, 0.8);
    //transition: background 0.3s ease;
    //padding: 10px;
    //box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.15);
    //&:hover {
    //    background: rgba(255, 255, 255, 0.95); /* Измените фон при наведении */
    //}
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
    padding-bottom: 4px;
    padding-top: 4px;
    position: relative;
`

export const HeaderImage = styled.img`
    border-radius: 35%;
    width: 200px;
    height: 60px;

`
export const HeaderNavigationButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin: -2px;
    overflow: hidden;
    padding: 2px;
`
export const SignButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
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
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #BDA1EC;
    color: #FFFFFF;


    &:hover {
        color: #555;
        background-color: #f0f0f0;
    }
`