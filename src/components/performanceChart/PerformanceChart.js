import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "./PerformanceChart.css";

const PerformanceChart = (props) => {

    const performances = [];
    const kind = [
        "Intensité",
        "Vitesse",
        "Force",
        "Endurance",
        "Energie",
        "Cardio"
    ]

    props.data.data.map((value)=>{
        performances.push({kind: kind[parseInt(value.kind)-1], A: value.value})
    })

    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="20px" cy="20px" outerRadius="60" data={performances}>
                <PolarGrid radialLines={false} polarRadius={[0, 12, 24, 36, 48, 60]} />
                <PolarAngleAxis tickLine={false} tick={{fontSize:12, fontWeight:500}} stroke="white" dataKey="kind" />
                <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PerformanceChart
