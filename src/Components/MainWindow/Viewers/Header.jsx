import {
    HeaderImage,
    HeaderNavigationButtons,
    SignButton,
    SignButtons,
    StyledHeader,
    StyledText
} from "../Styles/StyledComponents";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../Context/AuthProvider";

export const Header = () => {

    const welcomeText = "ReserveEasy"

    const navigate = useNavigate();

    const {token, logout} = useContext(AuthContext)

    const handleSignIn = () => {
        navigate("/login");
    };

    const handleSignUp = () => {
        navigate("/register")
    }
    const handleLogOut = () => {
        logout()
        navigate("/")
    }

    return (
        <StyledHeader>
            <Link to={"/"}>
                <HeaderImage src={"images/photo_2024-02-05_18-25-44.jpg"}/>
                {/*<StyledText style={{marginTop: "20px"}}>{welcomeText}</StyledText>*/}
            </Link>
            <HeaderNavigationButtons>
            </HeaderNavigationButtons>
            {!token ?
                <SignButtons>
                    <SignButton onClick={handleSignIn}>Войти</SignButton>
                    <SignButton onClick={handleSignUp}>Регистрация</SignButton>
                </SignButtons> :
                <SignButtons>
                    <SignButton onClick={handleLogOut}>Выйти</SignButton>
                </SignButtons>}
        </StyledHeader>
    )
}