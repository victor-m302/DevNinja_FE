import React from 'react';
import './layout/Header.css';
import './BarraPesq.jsx'
import logo from '../components/layout/ninja-dev-01-02.png'
import BarraPesq from './BarraPesq.jsx';


export default props => {


    return (
        <header className="header">
            <img id="logo" src={logo} alt="ninjadevLogo"/>
            <BarraPesq/>



        </header>
    )
}
