import React from "react";
import "./KeyData.css";

const KeyData = (props) => {
    
    return <section className="keyData">
        <div className="dataIcon" style={{ backgroundColor:props.color+"15" }}>
            <img src={props.icon} alt={"icone de "+props.title}/>
        </div>
        <div className="dataDetails">
            <h3>{props.value}{props.title === "Calories" ? "kCal" : "g"}</h3>
            <p>{props.title}</p>
        </div>
    </section>
}

export default KeyData
