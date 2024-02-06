import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import Footer from "./Components/Footer/Viewers/Footer";
import {Header} from "./Components/MainWindow/Viewers/Header";
import {MyFabricComponent} from "./Components/RestaurantScheme";
import {BookingService} from "./Components/RestaurantPage/Viewers/BookingService";
import {SignUp} from "./Components/SignUp/MainRegister";
import {SignIn} from "./Components/SignIn/SignIn";
import {Admin} from "./Components/Admin/Admin";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/restaurant/:id" element={<RestaurantPageMain/>}/>
            <Route path="/restaurant/:id/tables/:tableId" element={<BookingService/>}/>
            <Route path="/scheme/:id" element={<MyFabricComponent/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
