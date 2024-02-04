import {MainPlace} from "./Viewers/MainPlace";
import {Filter} from "./Viewers/Filter";
import {EstablishmentsMap} from "./Viewers/EstablishmentsMap";
import {Footer} from "./Viewers/Footer";
import {Header} from "./Viewers/Header";


export const Main = () => {

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