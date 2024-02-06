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
            const response = await fetch('http://45.151.144.194:8080/api/v1/admin/restaurants', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0aUBtYWlsLnJ1In0.NihafUhuF1RjpYlyeb7cxzVghJlz-M5bNZjEl0UdrLM'
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
                const errorMessage = await response.text();
                console.error('Ошибка при добавлении ресторана: ', + errorMessage);
            } else {
                alert('Ресторан успешно добавлен!');
            }
        } catch (error) {
            console.error('Ошибка при добавлении ресторана:', error.message);
        }
    };

    return (
        <MainContainer>
            <form onSubmit={handleSubmit}>
                <WelcomeText>Добавить ресторан</WelcomeText>
                <InputContainer>
                    <Input type="text" placeholder="Название ресторана" value={name}
                               onChange={(e) => setName(e.target.value)}/>
                    <Input type="text" placeholder="Город" value={city}
                           onChange={(e) => setCity(e.target.value)}/>
                    <Input type="text" placeholder="Адрес" value={address}
                               onChange={(e) => setAddress(e.target.value)}/>
                    <Input type="text" placeholder="Описание" value={description}
                               onChange={(e) => setDescription(e.target.value)}/>
                    <Input type="text" placeholder="Ссылка на фотографии" value={url}
                               onChange={(e) => setUrl(e.target.value)}/>
                </InputContainer>
                <ButtonContainer>
                    <Button content="Добавить ресторан"/>
                </ButtonContainer>
            </form>
        </MainContainer>
    );
};