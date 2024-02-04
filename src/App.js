import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import Footer from "./Components/Footer/Viewers/Footer";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/restaurant" element={<RestaurantPageMain/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
