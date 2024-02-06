import {
    HeaderImage,
    HeaderNavigationButtons,
    SignButton,
    SignButtons,
    StyledHeader,
    StyledText
} from "../Styles/StyledComponents";
import {Link, useNavigate} from "react-router-dom";

export const Header = () => {

    const welcomeText = "ReserveEasy"

    const navigate = useNavigate();

    const handleSignIn = () => {
            navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/register")
    }

    return (
        <StyledHeader>
            <HeaderImage src={"images/photo_2024-02-05_18-25-44.jpg"}/>
            <HeaderNavigationButtons>
                <Link to={"/"}>
                    <StyledText style={{marginTop: "20px"}}>{welcomeText}</StyledText>
                </Link>
            </HeaderNavigationButtons>
            <SignButtons>
                <SignButton onClick={handleSignIn}>Войти</SignButton>
                <SignButton onClick={handleSignUp}>Регистрация</SignButton>
            </SignButtons>
        </StyledHeader>
    )
}