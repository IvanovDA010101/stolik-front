import {BookingButton, Restaurant, RestaurantInfo, StyledImage} from "../Styles/StyledComponents";
import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router";
import {ReactSVG} from "react-svg";
import {AuthContext} from "../../Context/AuthProvider";

export const Establishment = () => {
    const [establishment, setEstablishment] = useState([]);

    const params = useParams()
    const id = params.id
    const fetchData = async () => {
        try {
            const response = await fetch(`http://45.151.144.194:8080/api/v1/restaurants/${id}`, {
                headers: {
                    'accept': '*/*'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // console.log(data);
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
        <>
            <Restaurant key={establishment.id}>
                <StyledImage src={establishment.url} alt={establishment.name}/>
                <RestaurantInfo>
                    <h2>{establishment.name}</h2>
                    <p>{establishment.description}</p>
                    <p>{establishment.address}</p>
                </RestaurantInfo>
            </Restaurant>
        </>
    );
}