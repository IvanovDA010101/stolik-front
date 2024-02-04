import {Switchers} from "../FunctionalComponents/Switchers";
import {EstablishmentList} from "../FunctionalComponents/EstablishmentList";
import {useState} from "react";
import {StyledMainPlace} from "../Styles/StyledComponents";
import {Link} from "react-router-dom";

export const MainPlace = () => {

    const [selectedOption, setSelectedOption] = useState("рестораны");

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    }

    return (
        <StyledMainPlace>
            <Switchers   options={["рестораны", "бары", "кафе" ]}
                         selectedOption={{selectedOption}}
                         onOptionSelect={handleOptionSelect}/>
            <EstablishmentList/>
        </StyledMainPlace>
    )
}