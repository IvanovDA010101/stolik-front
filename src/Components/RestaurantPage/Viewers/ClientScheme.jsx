import {useContext, useEffect, useRef, useState} from 'react';
import * as fabric from 'fabric';
import {useNavigate} from "react-router-dom";
import {useParams} from "react-router";
import {AuthContext} from "../../Context/AuthProvider";
import {SignButton} from "../../MainWindow/Styles/StyledComponents";

export const ClientScheme = ({ tablesReserved, date, time }) => {
    const canvasRef = useRef(null);
    const navigate = useNavigate()
    const isFetching = useRef(false);
    const [loading, setLoading] = useState(false);
    let {token} = useContext(AuthContext)

    const tables = tablesReserved
    const params = useParams()
    const id = params.id

    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if(!isFetching.current) {
                isFetching.current = true;


                try {
                    if (canvas) {
                        const response = await fetch(`http://45.151.144.194:8080/api/v1/restaurants/${id}/tables`, {
                            headers: {
                                'accept': '*/*'
                            }
                        });
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }

                        const data = await response.json();
                        const jsonParse = JSON.parse(data.file);
                        const objects = await fabric.util.enlivenObjects(jsonParse.objects);

                        canvas.clear()

                        objects.forEach(function (o) {

                            console.log("Tables = " + tables.includes(3))

                            if (tables.includes(parseInt(o._objects[1].text))) {
                                o.selectable = false;
                                o._objects[0].fill = 'red';
                            } else {
                                o.selectable = true;
                                o._objects[0].fill = 'green';
                            }

                            o.fill = 'rgba(245, 40, 145, 0.8)';
                            o.lockMovementX = true;
                            o.lockMovementY = true;
                            o.lockRotation = true;
                            o.lockScalingX = true;
                            o.lockScalingY = true;
                            o.lockScalingFlip = true;

                            canvas.add(o);
                        });

                        canvas.renderAll();

                        canvas.on('selection:created', function (e) {
                            const tableId = e.selected[0]._objects[1].text;
                            if (tableId !== undefined) {
                                navigate(`/restaurant/${id}/tables/${tableId}`);
                            }
                        });
                    }


                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    isFetching.current = false
                }
            }
            }

        fetchData();
    }, [canvas, date, time]);

    useEffect(() => {
        if (!canvas) {
            const newCanvas = new fabric.Canvas(canvasRef.current, {width: 800, height: 600});
            setCanvas(newCanvas);
        }
    }, []);

// Далее в вашем компоненте вы можете использовать canvas для работы с объектами на холсте





    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://45.151.144.194:8080/api/v1/restaurants/${id}/tables`, {
    //                 headers: {
    //                     'accept': '*/*'
    //                 }
    //             });
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //
    //             const data = await response.json();
    //             const jsonParse = JSON.parse(data.file);
    //             const objects = await fabric.util.enlivenObjects(jsonParse.objects);
    //             const loadedCanvas = new fabric.Canvas(canvasRef.current, { width: 800, height: 600 });
    //
    //             loadedCanvas.clear();
    //
    //             objects.forEach(function (o) {
    //
    //
    //                 console.log(o._objects[1].text.data)
    //
    //                 if (tablesReserved.includes(o._objects[1].text)) {
    //                     o.selectable = false;
    //                     o._objects[0].fill = 'red';
    //                 } else {
    //                     o.selectable = true;
    //                     o._objects[0].fill = 'green';
    //                 }
    //
    //                 o.fill = 'rgba(245, 40, 145, 0.8)';
    //                 o.lockMovementX = true;
    //                 o.lockMovementY = true;
    //                 o.lockRotation = true;
    //                 o.lockScalingX = true;
    //                 o.lockScalingY = true;
    //                 o.lockScalingFlip = true;
    //
    //                 loadedCanvas.add(o);
    //             });
    //
    //             loadedCanvas.renderAll();
    //
    //             loadedCanvas.on('selection:created', function (e) {
    //                 const tableId = e.selected[0]._objects[1].text;
    //                 if (tableId !== undefined) {
    //                     navigate(`/restaurant/${id}/tables/${tableId}`);
    //                 }
    //             });
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     }
    //
    //     fetchData();
    // }, [date, time]);




    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://45.151.144.194:8080/api/v1/restaurants/${id}/tables`, {
    //                 headers: {
    //                     'accept': '*/*'
    //                 }
    //             });
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             // console.log(data.file);
    //             const jsonParse = JSON.parse(data.file);
    //             const objects = await fabric.util.enlivenObjects(jsonParse.objects);
    //             // Создание canvas после получения данных и добавление объектов
    //             const loadedCanvas = new fabric.Canvas(canvasRef.current, {width: 800, height: 600});
    //
    //             objects.forEach(function (o) {
    //                 // const data = o.toJSON()
    //
    //                 if (tables.includes(o._objects[1].text)){
    //                     console.log("Object")
    //                     console.log(o._objects[1].text)
    //                 }
    //
    //                 o.selectable = !tables.includes(o._objects[1].text);
    //                 o._objects[0].fill = !tables.includes(o._objects[1].text) ? 'green' : 'red';
    //                 // o._objects[0].fill = 'rgba(245, 40, 145, 0.8)';
    //                 o.fill = 'rgba(245, 40, 145, 0.8)';
    //                 o.lockMovementX = true;
    //                 o.lockMovementY = true;
    //                 o.lockRotation = true;
    //                 o.lockScalingX = true;
    //                 o.lockScalingY = true;
    //                 o.lockScalingFlip = true;
    //
    //                 loadedCanvas.add(o);
    //             });
    //             loadedCanvas.renderAll()
    //             loadedCanvas.on('selection:created', function (e) {
    //                 const tableId = e.selected[0]._objects[1].text
    //                 if (tableId !== undefined) {
    //                     navigate(`/restaurant/${id}/tables/${tableId}`)
    //                 }
    //             });
    //             console.log(loadedCanvas)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             // Обработка ошибки
    //         }
    //     }
    //
    //     fetchData(); // Загрузка данных при монтировании компонента
    // }, []);

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
