import React from 'react';
import { ResponsiveContainer, LineChart, XAxis, Tooltip, Line, Rectangle } from 'recharts';
import "./SessionsChart.css";

const SessionChart = (props) => {

    const days = [
        "L",
        "M",
        "M",
        "J",
        "V",
        "S",
        "D"
    ]

    const data = [];

    for(let i=0; i < props.data.sessions.length; i++){
        data.push({sessionLength : props.data.sessions[i].sessionLength, day : days[i]})
    }

    const CustomizedCursor = ({ points }) => {
        return <Rectangle fill="black" opacity={0.1} x={points[1].x} width={200} height={250} />
    }

    const CustomTooltip = ({ payload }) => {
        if (payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{payload[0].value} min</p>
                </div>
            );
        }
      
        return null;
    };

    return (
        <section className="sessions">
            <div className='sessionsChart'>
                <h3 className="sessionsTitle">
                    Durée moyenne des sessions
                </h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{top : 75, bottom : 10, left : 20, right : 20}}>
                        <XAxis dataKey="day"
                            type="category"
                            axisLine={false}
                            tickLine={false}
                            stroke="rgba(255, 255, 255, 0.8)"
                        />
                        <Tooltip cursor={<CustomizedCursor />} content={<CustomTooltip />} />
                        <Line type="natural" dataKey="sessionLength" stroke="white" dot={false} strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
}

export default SessionChart
