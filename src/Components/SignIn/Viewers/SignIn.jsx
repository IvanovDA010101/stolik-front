import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Button, ButtonContainer, Input, InputContainer, MainContainer, WelcomeText} from "../Styles/StyledComponents";
import {AuthContext} from "../../Context/AuthProvider";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();
    const {login} = useContext(AuthContext)

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://45.151.144.194:8080/login', {
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
                alert('Login Failed!')
            } else {
                const data = await response.json()
                login(data.token)
                navigate('/');
            }
        } catch (error) {
            alert(error)
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