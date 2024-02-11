import {useState, useEffect, useRef, useContext} from 'react';
import * as fabric from 'fabric';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {AuthContext} from "../../Context/AuthProvider";

export const ClientScheme = () => {
    const canvasRef = useRef(null);
    const navigate = useNavigate()
    let {token} = useContext(AuthContext)

    const params = useParams()
    const id = params.id
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://45.151.144.194:8080/api/v1/restaurants/${id}/tables`, {
                    headers: {
                        'accept': '*/*'
                    }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data.file);
                const jsonParse = JSON.parse(data.file);
                const objects = await fabric.util.enlivenObjects(jsonParse.objects);
                // Создание canvas после получения данных и добавление объектов
                const loadedCanvas = new fabric.Canvas(canvasRef.current, {width: 800, height: 600});
                objects.forEach(function (o) {
                    o.selectable = !o.isType('line');
                    o.lockMovementX = true;
                    o.lockMovementY = true;
                    o.lockRotation = true;
                    o.lockScalingX = true;
                    o.lockScalingY = true;
                    o.lockScalingFlip = true;

                    loadedCanvas.add(o);
                });

                loadedCanvas.on('selection:created', function (e) {
                    const tableId = e.selected[0]._objects[1].text
                    if (tableId !== undefined) {
                        navigate(`/restaurant/${id}/tables/${tableId}`)
                    }
                });
                console.log(loadedCanvas)
            } catch (error) {
                console.error('Error fetching data:', error);
                // Обработка ошибки
            }
        }

        fetchData(); // Загрузка данных при монтировании компонента
    }, []);

    // console.log(token)
    // token=null
    // Отображение canvas
    return (
        <div>
            {token ?
            <canvas ref={canvasRef}></canvas> : <p>Сначала авторизируйтесь</p>}
        </div>)

}
