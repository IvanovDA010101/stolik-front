import {
    HeaderImage,
    HeaderNavigationButtons, SignButton,
    SignButtons,
    StyledHeader, StyledText
} from "../Styles/StyledComponents";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

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
            <HeaderImage src={"images/img_imgbintablere.png"}/>
            <HeaderNavigationButtons>
                <Link to={"/"}>
                    <StyledText style={{marginTop: "20px"}}>{welcomeText}</StyledText>
                    {/*<HeaderButton>{textMain}</HeaderButton>*/}
                </Link>
                {/*<HeaderButton>{textContacts}</HeaderButton>*/}
            </HeaderNavigationButtons>
            <SignButtons>
                <SignButton onClick={handleSignIn}>Войти</SignButton>
                <SignButton onClick={handleSignUp}>Регистрация</SignButton>
            </SignButtons>
        </StyledHeader>
    )
}