import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import Footer from "./Components/Footer/Viewers/Footer";
import {Header} from "./Components/MainWindow/Viewers/Header";
import {MyFabricComponent} from "./Components/RestaurantScheme";
import {BookingService} from "./Components/RestaurantPage/Viewers/BookingService";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/restaurant/:id" element={<RestaurantPageMain/>}/>
            <Route path="/restaurant/:id/tables/:tableId" element={<BookingService/>}/>
            <Route path="/scheme/" element={<MyFabricComponent/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
