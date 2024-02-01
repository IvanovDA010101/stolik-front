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

    const establishments = ["Первый", "Второй","Третий"];
    return (
        <StyledMainPlace>
            <Switchers   options={["рестораны", "бары", "кафе" ]}
                         selectedOption={{selectedOption}}
                         onOptionSelect={handleOptionSelect}/>
            <Link to={"/restaurant"}>
            <EstablishmentList establishments={establishments}/>
            </Link>
        </StyledMainPlace>
    )
}