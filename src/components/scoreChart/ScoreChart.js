import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Label } from "recharts";
import "./ScoreChart.css";

const CustomLabel = ({ viewBox, value }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy - 5}
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fontSize="22"
        fontWeight="500"
      >
        {value}%
      </text>
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#74798C"
        fontSize="12"
        fontWeight="600"
      >
        de votre objectif
      </text>
    </g>
  );
};

const ScoreChart = (props) => {

  const data = [{value: props.value}]

  return (
    <section className="score">
      <h3 className="scoreTitle">
        Score
      </h3>
      <div className="scoreChart">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={0}
              outerRadius={55}
              endAngle={360}
              fill="white"
              isAnimationActive={false}
            >
            </Pie>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={65}
              cornerRadius={50}
              startAngle={85}
              endAngle={(360*props.value)+85}
              fill="#FF0101"
              >
              <Label
                content={<CustomLabel labelText="ICPs" value={props.value*100} />}
                position="center"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}

export default ScoreChart
