import {StyledComponents, StyledEstablishmentList} from "../Styles/StyledComponents";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export const EstablishmentList = ({}) => {
    const [establishments, setEstablishments] = useState([]);


    const fetchData = async () => {
        try {
            const response = await fetch('http://reserveeasy.ru:8080/api/v1/restaurants', {
                headers: {
                    'accept': '*/*'
                }
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setEstablishments(data);
            // return data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <StyledEstablishmentList>
            {establishments.map((establishment) => (
                <Link to={`/restaurant/${establishment.id}`}>
                    <StyledComponents key={establishment.id}>
                        <img src={establishment.url} alt={establishment.name}/>
                        <p>{establishment.name}</p>
                        <p>{establishment.description}</p>
                        <p>{establishment.address}</p>
                    </StyledComponents>
                </Link>
            ))}
        </StyledEstablishmentList>
    );
}