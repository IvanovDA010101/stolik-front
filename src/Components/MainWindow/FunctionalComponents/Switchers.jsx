import {StyledButton, StyledText} from "../Styles/StyledComponents";
import {Link} from "react-router-dom";

export const Switchers = ({options, selectedOption, onOptionSelect}) => {
    return (
        <div>
            {options.map((option) => (
                <Link to={"/restaurant"}>
                    <StyledButton key={option} onClick={() => onOptionSelect(option)}
                                  className={option === selectedOption ? "selected" : ""}>
                        {option}
                    </StyledButton>
                </Link>
            ))}
        </div>
    );
};