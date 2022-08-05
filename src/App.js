import './styles/App.css';
import React, {useEffect, useState} from "react";
import MyNavbar from "./components/navbar/MyNavbar";
import MyMain from "./components/main/MyMain";


function App() {

    return (
        <div className="App">
            <MyNavbar/>

            <MyMain/>
        </div>
    );
}


export default App;
