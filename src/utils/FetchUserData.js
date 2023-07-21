import { useState, useEffect } from "react";
import { useParams, useNavigate  } from 'react-router-dom';
import Dashboard from "../pages/dashboard/Dashboard";

const FetchUserData = () => {
    
    const isDataMocked = false;
    const serverURL = 'http://localhost:3000'
    const { id } = useParams();
    const navigate = useNavigate();

	const [userData, setUserData] = useState();
    
    const [mainData, setMainData] = useState();
    const [activityData, setActivityData] = useState();
    const [sessionsData, setSessionsData] = useState();
    const [performanceData, setPerformanceData] = useState();

    const [counter, setCounter] = useState(0);

    const getMockedMainData = async () =>  {
        const response = await fetch(`../data/main.json`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          navigate("/*");
        });
        setMainData(response.find((
            (mainData) => mainData.id == id
        )));
    } 
    
    const getMockedActivityData = async () =>  {
        const response = await fetch(`../data/userActivity.json`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          navigate("/*");
        });
        setActivityData(response.find((
            (activity) => activity.userId == id
        )));
    } 
    
    const getMockedSessionsData = async () =>  {
        const response = await fetch(`../data/userAverageSession.json`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          navigate("/*");
        });
        setSessionsData(response.find((
            (session) => session.userid == id
        )));
    } 
    
    const getMockedPerformanceData = async () =>  {
        const response = await fetch(`../data/userPerformance.json`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err)
          navigate("/*");
        });
        setPerformanceData(response.find((
            (performance) => performance.userid == id
        )));
        setCounter(1);
    } 

    let getMainData;
    let getActivityData;
    let getSessionsData;
    let getPerformanceData;

    if(!isDataMocked){
        getMainData = fetch(`${serverURL}/user/${id}`)
        .then((response) => response.json())
        .then(json => {return json.data})
        .catch((err) => {
        console.log(err)
          navigate("/*");
        });;

        getActivityData = fetch(`${serverURL}/user/${id}/activity`)
        .then((response) => response.json())
        .then(json => {return json.data})
        .catch((err) => {
        console.log(err)
          navigate("/*");
        });;

        getSessionsData = fetch(`${serverURL}/user/${id}/average-sessions`)
        .then((response) => response.json())
        .then(json => {return json.data})
        .catch((err) => {
        console.log(err)
          navigate("/*");
        });;

        getPerformanceData = fetch(`${serverURL}/user/${id}/performance`)
        .then((response) => response.json())
        .then(json => {return json.data})
        .catch((err) => {
        console.log(err)
        navigate("/*");
        });;
    }
    
    useEffect(()=>{
        if(counter === 0){
            if(isDataMocked){
                getMockedMainData()
                getMockedActivityData()
                getMockedSessionsData()
                getMockedPerformanceData()
            }
            else{
                getMainData.then((response) => {
                    setMainData(response);
                });
                getActivityData.then((response) => {
                    setActivityData(response);
                });
                getSessionsData.then((response) => {
                    setSessionsData(response);
                });
                getPerformanceData.then((response) => {
                    setPerformanceData(response);
                    setCounter(1);
                });
            }
        }
        
        if(counter === 1){
            setUserData({
                main : mainData,
                activities : activityData,
                sessions: sessionsData,
                performance: performanceData
            });
            setCounter(2);
        }

    }, [counter])

    if(userData !== undefined){
        if(userData.main !== undefined){
            return <Dashboard userData={userData} />;
        }
        else{
            navigate("/*");
        }
    }
}

export default FetchUserData;