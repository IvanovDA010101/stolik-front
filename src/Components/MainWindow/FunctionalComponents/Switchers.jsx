import {StyledButton, StyledText} from "../Styles/StyledComponents";

export const Switchers = ({ options, selectedOption, onOptionSelect }) => {
    return (
        <div>
            {options.map((option) => (
                <StyledButton key={option} onClick={() => onOptionSelect(option)} className={option === selectedOption ? "selected" : ""}>
                    <StyledText text>{option}</StyledText>
                </StyledButton>
            ))}
        </div>
    );
};