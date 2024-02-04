import {
    HeaderButton,
    HeaderImage,
    HeaderNavigationButtons, SignButton,
    SignButtons,
    StyledHeader, StyledText
} from "../Styles/StyledComponents";
import {Link} from "react-router-dom";

export const Header = () => {

    const textMain = "Главная"
    const textContacts = "О нас"
    const welcomeText = "ReserveEasy"
    return (
        <StyledHeader>
            <HeaderImage src={"images/img_imgbintablere.png"}/>
            <StyledText style={{marginTop: "20px"}}>{welcomeText}</StyledText>
            <HeaderNavigationButtons>
                <Link to={"/"}>
                    <HeaderButton>{textMain}</HeaderButton>
                </Link>
                <HeaderButton>{textContacts}</HeaderButton>
            </HeaderNavigationButtons>
            <SignButtons>
                <SignButton>Sign In</SignButton>
                <SignButton>Sign Up</SignButton>
            </SignButtons>
        </StyledHeader>

    )

}