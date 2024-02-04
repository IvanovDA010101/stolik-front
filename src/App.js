import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import Footer from "./Components/Footer/Viewers/Footer";
import {Admin} from "./Components/Admin/Admin";
import {SignIn} from "./Components/SignIn/SignIn";
import {Header} from "./Components/MainWindow/Viewers/Header";


function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/restaurant" element={<RestaurantPageMain/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/login" element={<SignIn/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
