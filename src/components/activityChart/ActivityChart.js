import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import "./ActivityChart.css";

const ActivityChart = (props) => {

    const formatXAxis = (day) => {
        return Number(day.slice(8));
    };
  
    const CustomTooltip = ({ payload }) => {
        if (payload && payload.length) {
            return (
                <div className="activityTooltip">
					<p>{`${payload[0].value}`}kg</p>
					<p>{`${payload[1].value}`}Kcal</p>
				</div>
            );
        }
    
        return null;
    };
      
    return (
        <section className='dailyActivities'>
            <h3 className="activitiesTitle">
                Activité quotidienne
            </h3>
            <div className="activitiesChart">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={props.data.sessions} margin={{top: 20, bottom: 10, left: 50, right: 10}} >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <Legend
                          verticalAlign="top"
                          align="right"
                          iconType="circle"
                          iconSize="10"
                          height={50}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={{fill: '#C4C4C480'}} />
                        <XAxis dataKey="day" tickMargin="20" tickSize="0" tickFormatter={formatXAxis} />
                        <YAxis
                            datakey="kilogram"
                            orientation="right"
                            type="number"
                            yAxisId="right"
                            axisLine={false}
                            tickLine={false}
                            domain={["dataMin-1", "dataMax+1"]}
                            interval={1}
                        />
                        <YAxis hide="true" datakey="calories" yAxisId="left" />
                        <Bar 
                            dataKey="kilogram" 
                            yAxisId="right"
                            fill="#282D30" 
                            barSize={8}
                            radius={[5, 5, 0, 0]}
                        />
                        <Bar
                            dataKey="calories"
                            yAxisId="left"
                            fill="#E60000"
                            barSize={8}
                            radius={[5, 5, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}

export default ActivityChart