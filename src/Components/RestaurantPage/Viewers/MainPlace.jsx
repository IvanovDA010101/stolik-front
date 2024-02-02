import {useState} from "react";
import {Restaurant} from "../Styles/StyledComponents";
import {Establishment} from "../FunctionalComponents/Establishment";

export const MainPlace = () => {

    const [selectedOption, setSelectedOption] = useState("рестораны");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    const establishments = ["Первый", "Второй","Третий"];
    return (
            <Establishment />
    )
}