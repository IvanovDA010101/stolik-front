import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {MainPlaceForm, MainPlaceInput, MainPlaceLabel} from "../../Admin/Styles/StyledComponents";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sessionId, setSessionId] = useState('');
    let navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://reserveeasy.ru:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });
            setSessionId(sessionId);

            navigate('/');
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Login failed:', error);
        }

    };

    return (
        <MainPlaceForm onSubmit={handleLogin}>
            <MainPlaceLabel>
                Email:
                <MainPlaceInput type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </MainPlaceLabel>
            <MainPlaceLabel>
                Пароль:
                <MainPlaceInput type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </MainPlaceLabel>
            <button type="submit">Войти</button>
        </MainPlaceForm>
    );
}