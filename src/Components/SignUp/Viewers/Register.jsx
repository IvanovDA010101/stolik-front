import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import  'react-datepicker/dist/react-datepicker.css';
import {Button, ButtonContainer, Input, InputContainer, MainContainer, WelcomeText} from "../Styles/StyledComponents";



export const Register = () => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdayDate, setBirthdayDate] = useState(new Date());
    const [phoneNumber, setPhoneNumber] = useState('');
    let navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        const isValidFirstName = validator.isLength(firstName, { min: 2, max: 30 });
        const isValidLastName = validator.isLength(lastName, { min: 2, max: 30 });
        const isValidEmail = validator.isEmail(email);
        const isValidPassword = validator.isLength(password, { min: 6, max: 30 });
        const isValidPhoneNumber = validator.isMobilePhone(phoneNumber, 'ru-RU');
        const isValidBirthdayDate = validator.isDate(birthdayDate, { format: 'YYYY-MM-DD' });

        if (!isValidFirstName || !isValidLastName || !isValidEmail || !isValidPassword || !isValidPhoneNumber || !isValidBirthdayDate) {
            console.error('Invalid data');
                return;
        }

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
                    birthdayDate,
                    phoneNumber
                }),
            });
            navigate('/login');
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <MainContainer onSubmit={handleRegister}>
            <WelcomeText>Регистрация</WelcomeText>
            <InputContainer>
                <Input type="text" placeholder="Имя" value={firstName} onChange={(e) => setFirstname(e.target.value)}/>
                <Input type="text" placeholder="Фамилия" value={lastName} onChange={(e) => setLastname(e.target.value)}/>
                <Input type="text" placeholder="Телефон номер" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                <Input type="text" placeholder="Дата рождения" value={birthdayDate} onChange={(e) => setBirthdayDate(e.target.value)}/>
                <Input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
            <ButtonContainer>
                <Button content="Регистрация" />
            </ButtonContainer>
        </MainContainer>
    );
}