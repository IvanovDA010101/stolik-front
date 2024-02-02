import {MainPlace} from "./Viewers/MainPlace";
import {Filter} from "./Viewers/Filter";
import {Footer} from "./Viewers/Footer";

export const RestaurantPageMain = () => {

    return (
        <div>
            {/*<Header/>*/}
            <MainPlace/>
            <Filter/>
            <Footer/>
        </div>
    )
}