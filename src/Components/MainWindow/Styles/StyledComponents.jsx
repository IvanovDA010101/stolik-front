import styled from "styled-components";

export const StyledMainPlace = styled.div`
    gap: 41px;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    display: flex;
    margin-bottom: 263px;
    
    background: #FFFF;
  
`

export const StyledEstablishmentList = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    place-content: center;
    grid-template-rows: auto auto auto auto; /* 2 строки */
    
    background: #FFFF;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.08);
    gap: 10px;
    
`

export const StyledComponents = styled.div`
    position: relative;
    width: 100%; /* Чтобы элементы занимали всю доступную ширину */
    max-width: 500px; /* Уменьшаем максимальную ширину блока */
    border-radius: 50px; /* Увеличьте радиус, чтобы закруглить углы */
    background: transparent;
    /* Измените background: transparent;альфа-значение, чтобы сделать фон менее видимым */
    text-decoration: none!important;
    padding: 10px; /* Добавьте отступ для контента */
    transition: background 0.3s ease; /* Добавьте плавный переход при изменении фона */
  
   
    /* Другие стили */
    &:hover {
        background: rgba(255, 255, 255, 0.95); /* Измените фон при наведении */
    }
    img {
        width: 100%; /* Растягиваем изображение на всю ширину блока */ /* Закругляем верхние углы изображения */
        border-radius: 50px;
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
export const Title = styled.p`
    font-weight: bold; // Делаем текст жирным
    text-align: left; // Выравниваем текст по левому краю
    color: black; // Задаем черный цвет текста
     // Убираем подчеркивание ссылки
    cursor: pointer; // Делаем курсор указателем, чтобы обозначить, что это кликабельный элемент
    flex: 1; // Устанавливаем гибкое распределение текста
    margin-top: 0.3em;
    max-width: 100%; // Максимальная ширина текста для предотвращения излишнего увеличения при уменьшении масштаба
    font-size: 1.5em;
    &:hover {
        text-decoration: none; // Убираем подчеркивание при наведении
    }
    
`
export const Description = styled.p`
   
    font-weight: bold; // Делаем текст жирным
    text-align: center; // Выравниваем текст по левому краю
    color: black; // Задаем черный цвет текста
     // Убираем подчеркивание ссылки
  
    
    cursor: pointer; // Делаем курсор указателем, чтобы обозначить, что это кликабельный элемент
    flex: 1; // Устанавливаем гибкое распределение текста
    // Максимальная ширина текста для предотвращения излишнего увеличения при уменьшении масштаба
    font-size: 1em;
    &:hover {
        text-decoration: none; // Убираем подчеркивание при наведении
    }
    
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