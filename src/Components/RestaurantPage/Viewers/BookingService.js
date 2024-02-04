
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";


export const BookingService = () => {
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Ваша логика для обработки бронирования
        console.log('Было забронировано для', numberOfPeople, 'человек(а) на', selectedDate);
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
                    dateFormat="dd/MM/yyyy"
                    required
                />
            </div>
            <button type="submit">Забронировать</button>
        </form>
    );
}