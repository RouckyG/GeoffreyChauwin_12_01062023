import React from "react";
import { useState } from 'react';
import KeyData from "../../components/keydata/KeyData";
import calorieIcon from '../../assets/energy.svg';
import proteinIcon from '../../assets/chicken.svg';
import carbohydrateIcon from '../../assets/apple.svg';
import lipidIcon from '../../assets/cheeseburger.svg';
import ScoreChart from "../../components/scoreChart/ScoreChart";
import PerformanceChart from "../../components/performanceChart/PerformanceChart";
import SessionChart from "../../components/sessionChart/SessionsChart";
import "./Dashboard.css";
import ActivityChart from "../../components/activityChart/ActivityChart";

const Dashboard = (props) => {

    const [userData, setUserData] = useState(props.userData);

    return <main className="dashboard">
        {userData !== undefined && <>
            <div className="welcomeMessage">
                <h1>Bonjour <span className="userName">{userData.main.userInfos.firstName}</span></h1>
                <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            </div>
            <div className="charts">
                <div className="leftCharts">
                    <ActivityChart data={userData.activities}/>
                    {/* <SessionChart data={userData.sessions}/> */}
                    {/* <PerformanceChart data={userData.performance}/> */}
                    {/* <ScoreChart value={userData.main.score}/> */}
                </div>
                <div className="mainData">
                    <KeyData title="Calories" value={userData.main.keyData.calorieCount} icon={calorieIcon} color="#FF0000" />
                    <KeyData title="Proteines" value={userData.main.keyData.proteinCount} icon={proteinIcon} color="#4AB8FF" />
                    <KeyData title="Glucides" value={userData.main.keyData.carbohydrateCount} icon={carbohydrateIcon} color="#F9CE23" />
                    <KeyData title="Lipides" value={userData.main.keyData.lipidCount} icon={lipidIcon} color="#FD5181" />
                </div>
            </div>
        </>}
    </main>
}

export default Dashboard