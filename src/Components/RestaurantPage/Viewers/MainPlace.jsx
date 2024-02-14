import {Establishment} from "../FunctionalComponents/Establishment";
import {ClientScheme} from "./ClientScheme";
import TikTokVideoGallery from "./TikTokVideoGallery";
import DatePicker from "react-horizontal-datepicker";
import {useEffect, useState} from "react";
import {useParams} from "react-router";


export const MainPlace = () => {
    const [date, setDate] = useState(null)
    const [time, setTime] = useState(null)
    const [tablesReserved, setTables] = useState([-1])

    const setTablesClick = (tableId) => {

        setTables((tablesReserved) => [...tablesReserved, tableId]);
    };

    const handleDatePricker = (val) => {
        const date = new Date(val);
        const day = date.getDate().toString().padStart(2, '0'); // Получаем день (приводим к строке и добавляем ведущий ноль, если нужно)
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Получаем месяц (нумерация месяцев начинается с 0)
        const year = date.getFullYear();

        const formattedDate = `${year}-${month}-${day}`;

        setDate(formattedDate);
        console.log(formattedDate);
    }

    const handleTimePicker = (event) => {
        const selectedTime = event.target.value;
        setTime(selectedTime);
        console.log(selectedTime);
        // reload()
    }

    const params = useParams()
    const id = params.id
    const fetchData = async () => {
        if (date!=null && time!=null)
        try {
            if (date && time) { // Проверяем, что дата и время установлены
                const formattedDate = `${date}T${time}:00.00`;
                const url = `http://reserveeasy.ru:8080/api/v1/bookings/restaurants/${id}?datetime=${formattedDate}`;
                const response = await fetch(url, {
                    headers: {
                        'accept': '*/*'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();




                setTables([])
                data.forEach(obj => {

                    const tableId = obj.tableId;
                    setTablesClick(tableId);
                });

                console.log(tablesReserved);
            }
            // const formattedDate = date + 'T' + time + ':00' + '.00'; // Конкатенация даты и времени в нужном формате
            // const url = `http://reserveeasy.ru:8080/api/v1/bookings/restaurants/${id}?datetime=${formattedDate}`;
            // const response = await fetch(url, {
            //     headers: {
            //         'accept': '*/*'
            //     }
            // });
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            // const data = await response.json();
            // data.forEach(obj => {
            //     const tableId = obj.tableId;
            //     setTablesClick(tableId)
            // });
            // // setTables(data.)
            // console.log(tablesReserved);
            // // return data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    useEffect(() => {
        fetchData()
    }, [date,time])

    return (
        <>
            <Establishment/>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                width: "50%",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <DatePicker getSelectedDay={handleDatePricker}/>
            </div>
            <div>
                <input
                    type="time"
                    step="900"
                    // onChange={handleDatePricker}
                    pattern="([01]?[0-9]|2[0-3]):(00|15|30|45)" /* Паттерн для ввода времени в формате HH:00, HH:15, HH:30, HH:45*/
                    onChange={handleTimePicker}
                    style={{
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        border: '1px solid #ccc',
                        padding: '5px',
                        fontSize: '16px',
                        width: '120px',
                        textAlign: 'center',
                    }}
                />
            </div>
            <ClientScheme tablesReserved={tablesReserved} date={date} time={time}/>
            <TikTokVideoGallery/>
        </>
    )
}