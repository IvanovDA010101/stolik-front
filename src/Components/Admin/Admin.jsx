import {Header} from "../MainWindow/Viewers/Header";
import {Filter} from "../MainWindow/Viewers/Filter";
import {EstablishmentsMap} from "../MainWindow/Viewers/EstablishmentsMap";
import {Footer} from "../MainWindow/Viewers/Footer";
import {MainPlace} from "./Viewers/MainPlace";

export const Admin = () => {

    return (
        <div>
            <MainPlace/>
            <Filter/>
            <EstablishmentsMap/>
            <Footer/>
        </div>
    )
}