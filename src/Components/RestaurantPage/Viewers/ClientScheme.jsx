import {useContext, useEffect, useRef} from 'react';
import * as fabric from 'fabric';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {AuthContext} from "../../Context/AuthProvider";
import {SignButton} from "../../MainWindow/Styles/StyledComponents";

export const ClientScheme = (tablesReserved) => {
    const canvasRef = useRef(null);
    const navigate = useNavigate()
    let {token} = useContext(AuthContext)

    const tables = tablesReserved.tablesReserved
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
                // console.log(data.file);
                const jsonParse = JSON.parse(data.file);
                const objects = await fabric.util.enlivenObjects(jsonParse.objects);
                // Создание canvas после получения данных и добавление объектов
                const loadedCanvas = new fabric.Canvas(canvasRef.current, {width: 800, height: 600});
                console.log(objects)
                objects.forEach(function (o) {
                    // const data = o.toJSON()
                    console.log(!tables.includes(o._objects[1].text) ? 'green' : 'red')
                    o.selectable = !tables.includes(o._objects[1].text);
                    o._objects[0].fill = !tables.includes(o._objects[1].text) ? 'green' : 'red';
                    // o._objects[0].fill = 'rgba(245, 40, 145, 0.8)';
                    o.fill = 'rgba(245, 40, 145, 0.8)';
                    o.lockMovementX = true;
                    o.lockMovementY = true;
                    o.lockRotation = true;
                    o.lockScalingX = true;
                    o.lockScalingY = true;
                    o.lockScalingFlip = true;

                    loadedCanvas.add(o);
                });
                loadedCanvas.renderAll()
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

    const handleClickSignIn = () =>{
        navigate("/login")
    }
    // console.log(token)
    // token=null
    // Отображение canvas
    return (
        <div>
            {token ?
                <canvas ref={canvasRef}></canvas> :
                <div>
                    <p>Сначала авторизируйтесь</p>
                    <SignButton onClick={handleClickSignIn}>Войти</SignButton>
                </div>}
        </div>)

}
