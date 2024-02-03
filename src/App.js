import './App.css';
import {Main} from "./Components/MainWindow/Main";
import {Route, Routes} from "react-router";
import {RestaurantPageMain} from "./Components/RestaurantPage/RestaurantPageMain";
import {Header} from "./Components/MainWindow/Viewers/Header";
import {MyFabricComponent, RestaurantScheme} from "./Components/RestaurantScheme";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/restaurant/:id" element={<RestaurantPageMain />}/>
        <Route path="/scheme/" element={<MyFabricComponent />}/>
        </Routes>
    </div>
  );
}

export default App;
