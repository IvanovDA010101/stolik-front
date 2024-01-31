import {Switchers} from "../FunctionalComponents/Switchers";
import {EstablishmentList} from "../FunctionalComponents/EstablishmentList";
import {useState} from "react";
import {StyledMainPlace} from "../StyledComponents/StyledMainPlace";

export const MainPlace = () => {

    const [selectedOption, setSelectedOption] = useState("рестораны");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    const establishments = ["Первый", "Второй","Третий"];
    return (
        <StyledMainPlace>
            <Switchers   options={["рестораны", "бары", "клубы" ]}
                         selectedOption={{selectedOption}}
                         onOptionSelect={handleOptionSelect}/>
            <EstablishmentList establishments={establishments}/>
        </StyledMainPlace>
    )
}