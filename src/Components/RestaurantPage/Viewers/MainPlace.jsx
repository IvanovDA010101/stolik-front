import {Establishment} from "../FunctionalComponents/Establishment";
import {useState} from "react";
import {StyledMainPlace} from "../Styles/StyledComponents";

export const MainPlace = (id) => {

    const [selectedOption, setSelectedOption] = useState("рестораны");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    const establishments = ["Первый", "Второй","Третий"];
    return (
        <StyledMainPlace>
            <Establishment />
        </StyledMainPlace>
    )
}