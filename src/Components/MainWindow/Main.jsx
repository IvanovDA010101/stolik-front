import {MainPlace} from "./Viewers/MainPlace";
import {Filter} from "./Viewers/Filter";
import {EstablishmentsMap} from "./Viewers/EstablishmentsMap";
import {Footer} from "./Viewers/Footer";


export const Main = () => {

    return (
        <div>
            <MainPlace/>
            <Filter/>
            <EstablishmentsMap/>
            <Footer/>
        </div>
    )
}