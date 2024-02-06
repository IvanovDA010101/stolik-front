import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 150px ;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #FFC107;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    margin: 15px auto 20px;
    @media only screen and (max-width: 320px) {
        width: 80vw;
        height: 90vh;
        hr {
            margin-bottom: 0.3rem;
        }
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 360px) {
        width: 80vw;
        height: 90vh;
        h4 {
            font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 80vw;
        height: 90vh;
    }

    @media only screen and (min-width: 768px) {
        width: 80vw;
        height: 80vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 70vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 100vh;
        margin: 15px auto 20px;
    }
`;

export const WelcomeText = styled.h2`
    margin: 3rem 0 2rem 0;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%;
    
    
`;

export const ButtonContainer = styled.div`
    margin: 10px 0 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginWith = styled.h5`
    cursor: pointer;
`;

export const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    background-color: #ebd0d0;
    margin: 1.5rem 0 1rem 0;
    backdrop-filter: blur(25px);
`;

export const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export const Input = ({ type, placeholder, value, onChange }) => {
    return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

export const StyledInput = styled.input`
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 2rem;
  width: 80%;
  height: 3rem;
  padding: 1rem;
  border: none;
  outline: none;
  color: #FFC107;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #FFC107;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: black;
    font-weight: 100;
    font-size: 1rem;
  }
`;

export const Button = ({ content }) => {
    return <StyledButton>{content}</StyledButton>;
}

export const StyledButton = styled.button`
  background: linear-gradient(to right, #FFC107 0%, #FFC107 79%);
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 2rem;
  cursor: pointer;
`;