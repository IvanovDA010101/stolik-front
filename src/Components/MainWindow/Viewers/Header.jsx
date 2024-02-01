import {
    HeaderButton,
    HeaderImage,
    HeaderNavigationButtons, SignButton,
    SignButtons,
    StyledHeader, StyledText
} from "../Styles/StyledComponents";

export const Header = () => {

    const textMain = "Главная"
    const textContacts = "О нас"
    const welcomeText = "Добро пожаловать в TableBooky"
    return (
        <StyledHeader>
            <HeaderImage src={"images/img_imgbintablere.png"}/>
            <StyledText style={{marginTop: "20px"}}>{welcomeText}</StyledText>
            <HeaderNavigationButtons>
                <HeaderButton>{textMain}</HeaderButton>
                <HeaderButton>{textContacts}</HeaderButton>
            </HeaderNavigationButtons>
            <SignButtons>
                <SignButton>Sign In</SignButton>
                <SignButton>Sign Up</SignButton>
            </SignButtons>
        </StyledHeader>

    )

}