import {BookingButton, Restaurant, RestaurantInfo, StyledImage} from "../Styles/StyledComponents";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import {ReactSVG} from "react-svg";

export const Establishment = () => {
    const [establishment, setEstablishment] = useState([]);

    const params = useParams()
    const id = params.id
    const fetchData = async () => {
        try {
            const response = await fetch(`http://reserveeasy.ru:8080/api/v1/restaurants/${id}`, {
                headers: {
                    'accept': '*/*'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setEstablishment(data);
            // return data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleHover = (e) => {
        e.target.style.stroke = "red"; // Изменение цвета обводки при наведении мыши
    };

    const handleClick = (e) => {
        alert("Вы кликнули на элемент с ID: ${e.target.id}"); // Добавление обработчика тегов для кликов по элементам SVG
    };
    return (
        <>
            <Restaurant key={establishment.id}>
                <StyledImage src={establishment.url} alt={establishment.name}/>
                <RestaurantInfo>
                    <p>{establishment.name}</p>
                    <p>{establishment.description}</p>
                    <p>{establishment.address}</p>
                    <BookingButton>Забронировать</BookingButton>
                </RestaurantInfo>
                {/*<ReactSVG src="/images/SchemePlace.svg"*/}
                {/*          afterInjection={(svg, error) => { // Добавление обработчика после вставки SVG*/}
                {/*              if (error) {*/}
                {/*                  console.error('Ошибка загрузки SVG:', error);*/}
                {/*                  return;*/}
                {/*              }*/}
                {/*              const paths = svg.getElementsByTagName('rect'); // Получение всех элементов <rect>*/}
                {/*              Array.from(paths).forEach(rect => {*/}
                {/*                  rect.onmouseover = handleHover; // Добавление обработчика события наведения мыши*/}
                {/*                  rect.onmouseleave = (e) => {*/}
                {/*                      e.target.style.stroke = '';*/}
                {/*                  }; // Удаление подсветки при отводе мыши*/}
                {/*                  rect.onclick = handleClick; // Добавление обработчика клика*/}
                {/*              });*/}
                {/*          }}*/}
                {/*/>*/}
                 {/*<div*/}
                {/*    dangerouslySetInnerHTML={{__html: svgContent}}*/}
                {/*    throwIfNamespace={false}*/}
                {/*/>*/}
            </Restaurant>
        </>
    );
}