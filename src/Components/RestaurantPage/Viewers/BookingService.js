
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import {useParams} from "react-router";
import { useNavigate } from 'react-router-dom';


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
            const response = await fetch(`http://reserveeasy.ru:8080/api/v1/bookings`, {
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
            time : "2024-02-04T22:17:35.387Z"
        }
        console.log(json)
        sendDataToBackend(JSON.stringify(json));
        navigate("/")
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label>Количество человек:</label>
                <input
                    type="number"
                    value={numberOfPeople}
                    onChange={(e) => setNumberOfPeople(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Выберите дату:</label>
                <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd/MM/yyyy/hh/mm"
                    required
                />
            </div>
            <button type="submit" onClick={handleSubmitButton}>Забронировать</button>
        </form>
    );
}