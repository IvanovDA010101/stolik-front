import React, { useState } from 'react';
import {Button, ButtonContainer, Input, InputContainer, MainContainer, WelcomeText} from "../Styles/StyledComponents";


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
        <MainContainer onSubmit={handleSubmit}>
            <WelcomeText>Добавить ресторан</WelcomeText>
            <InputContainer>
                <Input type="text" placeholder="Название ресторана" value={name} onChange={(e) => setName(e.target.value)}/>
                <Input type="text" placeholder="Город" value={city} onChange={(e) => setCity(e.target.value)}/>
                <Input type="text" placeholder="Адрес" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <Input type="text" placeholder="Описание" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <Input type="text" placeholder="Ссылка на фотографии" value={url} onChange={(e) => setUrl(e.target.value)}/>
            </InputContainer>
            <ButtonContainer>
                <Button content="Добавить ресторан" />
            </ButtonContainer>
        </MainContainer>
    );
};