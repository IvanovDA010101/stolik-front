import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, ButtonContainer, Input, InputContainer, MainContainer, WelcomeText} from "../Styles/StyledComponents";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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

            if (!response.ok) {
                const data = await response.json();
                console.error('Login failed:', data.message);
            } else {
                console.log('Login successful:');
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed 1234242342:', error);
        }

        console.log(e.response)
    };


    return (
        <MainContainer>
            <form onSubmit={handleLogin}>
                <WelcomeText>Войти</WelcomeText>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ButtonContainer>
                    <Button content="Войти"/>
                </ButtonContainer>
            </form>
        </MainContainer>
    );
}