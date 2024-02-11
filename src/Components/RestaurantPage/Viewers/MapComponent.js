import {Map, Placemark, YMaps} from 'react-yandex-maps';
import axios from 'axios';
import {useEffect, useState} from "react";

function MapComponent() {
    const [coordinates, setCoordinates] = useState([0,0]); // Координаты по умолчанию

    const apiKey = 'bd73df1b-b9d1-4d86-9318-1a354db4cbcc';
    const address = "Санкт-Петербург, серебристый бульвар 29к2"
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${address}`);
            const coords = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
            setCoordinates([parseFloat(coords[1]), parseFloat(coords[0])]);
            console.log(`${apiKey}`)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [coordinates])

    return (
        <div>
            <YMaps>
                <Map defaultState={{center: coordinates, zoom: 11}} style={{width: '400px', height: '400px'}}>
                    <Placemark geometry={coordinates}/>
                </Map>
            </YMaps>
        </div>
    );
}

export default MapComponent;