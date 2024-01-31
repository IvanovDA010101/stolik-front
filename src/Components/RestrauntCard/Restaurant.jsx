import {Header} from "./Viewers/Header";
import {MainPlace} from "./Viewers/MainPlace";
import {Filter} from "./Viewers/Filter";
import {EstablishmentsMap} from "./Viewers/EstablishmentsMap";
import {Footer} from "./Viewers/Footer";

export const Restaurant = () => {

    return (
        <div>
            <Header/>
            <MainPlace/>
            <Filter/>
            <EstablishmentsMap/>
            <Footer/>
        </div>
    )
}