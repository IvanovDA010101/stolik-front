import {Login} from "./Viewers/SignIn";
import {Header} from "../MainWindow/Viewers/Header";
import {Filter} from "../MainWindow/Viewers/Filter";
import {EstablishmentsMap} from "../MainWindow/Viewers/EstablishmentsMap";
import {Footer} from "../MainWindow/Viewers/Footer";

export const SignIn = () => {

    return (
        <div>
            <Login/>
            <Filter/>
            <EstablishmentsMap/>
            <Footer/>
        </div>
    )
}