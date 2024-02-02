import {RestaurantInfo, StyledComponents} from "../Styles/StyledComponents";
import {useEffect, useState} from "react";
import {useParams} from "react-router";

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


    return (
        <RestaurantInfo key={establishment.id}>
            <img src={establishment.url} alt={establishment.name}/>
            <p>{establishment.name}</p>
            <p>{establishment.description}</p>
            <p>{establishment.address}</p>
        </RestaurantInfo>
    );
}