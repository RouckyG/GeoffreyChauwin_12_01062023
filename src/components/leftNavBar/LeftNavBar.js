import React from 'react';
import yoga from '../../assets/yogaIcon.png';
import swim from '../../assets/swimIcon.png';
import bike from '../../assets/bikeIcon.png';
import lift from '../../assets/liftIcon.png';
import "./LeftNavBar.css";

const LeftNavBar = () => {

    return <nav className="leftNavbar">
        <ul>
            <li className="sportsIcon">
                <img src={yoga} alt="yoga"/>
            </li>
            <li className="sportsIcon">
                <img src={swim} alt="natation"/>
            </li>
            <li className="sportsIcon">
                <img src={bike} alt="vélo"/>
            </li>
            <li className="sportsIcon">
                <img src={lift} alt="musculation"/>
            </li>
        </ul>
        <p className="copyright">Copiryght, SportSee 2020</p>
    </nav>

}

export default LeftNavBar
