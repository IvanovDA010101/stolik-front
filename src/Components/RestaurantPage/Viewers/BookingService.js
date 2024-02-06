import "react-datepicker/dist/react-datepicker.css";
import React, {useState} from "react";
import {useParams} from "react-router";
import { useNavigate } from 'react-router-dom';
import {Button, ButtonContainer, Input, InputContainer, WelcomeText} from "../../SignUp/Styles/StyledComponents";


export const BookingService = () => {
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const navigate = useNavigate();
    const params = useParams()
    const id = params.id
    const tableId = params.tableId
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Ваша логика для обработки бронирования
        console.log('Было забронировано для', numberOfPeople, 'человек(а) на', selectedDate);
    };

    const sendDataToBackend = async (json) => {
        try {
            const response = await fetch(`http://45.151.144.194:8080/api/v1/bookings`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Указываем тип контента как JSON
                    'accept': '*/*'
                },
                body: json
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log(data);
            // Возможно, здесь вам захочется что-то делать с возвращенными данными
        } catch (error) {
            console.error('Error sending data to the backend:', error);
        }
    };
    const handleSubmitButton = () => {
        // Преобразуем canvas.current в JSON
        const json = {
            restaurantId: id,
            tableId: tableId,
            userId: 1,
            time : `${selectedDate}T18:17:35.387Z` //"2024-02-04T22:17:35.387Z"
        }
        console.log(json)
        sendDataToBackend(JSON.stringify(json));
        navigate("/")
    };

    return (
        <form onSubmit={handleSubmitButton}>
            <WelcomeText>Бронирование</WelcomeText>
            <InputContainer>
                <Input type="text" placeholder="Количество человек" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}/>
                <Input type="date" placeholder="Дата" value={selectedDate}
                       onChange={(e) => setSelectedDate(e.target.value)}/>
            </InputContainer>
            <ButtonContainer>
                <Button content="Забронировать"/>
            </ButtonContainer>
        </form>
    );
}