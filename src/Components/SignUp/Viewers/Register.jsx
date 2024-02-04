import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {MainPlaceForm, MainPlaceInput, MainPlaceLabel} from "../../Admin/Styles/StyledComponents";

export const Register = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdayDate, setBirthdayDate] = useState('');
    let navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://reserveeasy.ru:8080/api/v1/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    birthdayDate
                }),
            });
            navigate('/login');
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <MainPlaceForm onSubmit={handleRegister}>
            <MainPlaceLabel>
                Имя:
                <MainPlaceInput type="text" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Фамилия:
                <MainPlaceInput type="text" value={lastName} onChange={(e) => setLastname(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                ДР:
                <MainPlaceInput type="text" value={birthdayDate} onChange={(e) => setBirthdayDate(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Email:
                <MainPlaceInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Пароль:
                <MainPlaceInput type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </MainPlaceLabel>
            <button type="submit">Зарегистрироваться</button>
        </MainPlaceForm>
    );
}