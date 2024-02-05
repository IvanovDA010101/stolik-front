import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, ButtonContainer, Input, InputContainer, MainContainer, WelcomeText} from "../Styles/StyledComponents";

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
        <MainContainer onSubmit={handleLogin}>
            <WelcomeText>Войти</WelcomeText>
            <InputContainer>
                <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Пароль" value={password}
                       onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
            <ButtonContainer>
                <Button content="Войти"/>
            </ButtonContainer>
        </MainContainer>
    );
}