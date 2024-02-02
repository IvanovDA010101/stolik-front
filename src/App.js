import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import {Header} from "./Components/MainWindow/Viewers/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/restaurant/:id" element={<RestaurantPageMain />}/>
        </Routes>
    </div>
  );
}

export default App;
