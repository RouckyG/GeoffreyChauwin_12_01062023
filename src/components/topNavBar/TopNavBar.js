import React from 'react';
import logo from '../../assets/logoSportSee.png';
import "./TopNavBar.css";

const TopNavBar = () => {

    return <nav className="topNavbar">
        <img src={logo} alt="logo SportSee"/>
        <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
        </ul>
    </nav>

}

export default TopNavBar
