import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import Footer from "./Components/Footer/Viewers/Footer";
import {Admin} from "./Components/Admin/Admin";


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/restaurant/:id" element={<RestaurantPageMain/>}/>
            <Route path="/restaurant" element={<RestaurantPageMain/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
