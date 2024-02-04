import React, { useState } from 'react';
import {MainPlaceForm, MainPlaceInput, MainPlaceLabel} from "../Styles/StyledComponents"

export const MainPlace = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [ownerID] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://reserveeasy.ru:8080/api/v1/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    city,
                    address,
                    ownerID,
                    description,
                    url,
                }),
            });
            if (!response.ok) {
                console.error('Ошибка при добавлении ресторана:', await response.text());
            } else {
                alert('Ресторан успешно добавлен!');
            }
        } catch (error) {
            console.error('Ошибка при добавлении ресторана:', error);
        }
    };

    return (
        <MainPlaceForm onSubmit={handleSubmit}>
            <MainPlaceLabel>
                Имя ресторана:
                <MainPlaceInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Адрес ресторана:
                <MainPlaceInput type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Город ресторана:
                <MainPlaceInput type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Описание ресторана:
                <MainPlaceInput type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Ссылка на фото ресторана:
                <MainPlaceInput type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
            </MainPlaceLabel>
            <button type="submit">Добавить ресторан</button>
        </MainPlaceForm>
    );
};