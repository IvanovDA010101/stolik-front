import {Filter} from "../MainWindow/Viewers/Filter";
import {EstablishmentsMap} from "../MainWindow/Viewers/EstablishmentsMap";
import {Register} from "./Viewers/Register";

export const SignUp = () => {

    return (
        <div>
            <Register/>
            <Filter/>
            <EstablishmentsMap/>
        </div>
    )
}