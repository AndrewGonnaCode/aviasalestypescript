import React, {Component} from 'react';
import Filters from "./containers/Filters/Filters";
import './App.css';
import logo from './images/logo.svg'
import Tickets from "./containers/Tickets/Tickets";


const App:React.FC = ()=>{
        return (
            <div className='App'>
                <div className='container'>
                    <div className="logo">
                        <img src={logo} alt="Логотип"/>
                    </div>
                    <Filters/>
                    <Tickets/>
                </div>
            </div>
        )
    }

export default App;