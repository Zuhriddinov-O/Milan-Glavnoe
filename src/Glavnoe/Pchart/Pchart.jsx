import './Pchart.scss'
import React from 'react'

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Русский', value: 450, fill: "#4897D1" },
    { name: 'Турецкий', value: 500, fill: "#EF476F" },
    { name: 'Узбекский', value: 500, fill: "#C6E4FB" },
];

const data02 = [
    { id: 1, name: 'Мужчины', value: 450, fill: "#4897D1" },
    { id: 2, name: 'Женщина', value: 500, fill: "#EF476F" },

];
function Pchart() {

    return (
        <React.Fragment>
            <div className="piechart-container">
                <div className="piechart">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="value" cx="50%" cy="50%" data={data01} innerRadius={55} outerRadius={80} label />
                            <Tooltip />
                            <Legend verticalAlign="top" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="piechart2">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="value" isAnimationActive={true} data={data02} innerRadius={55} cx="50%" cy="50%" outerRadius={80} label />
                            <Tooltip />
                            <Legend verticalAlign="top" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Pchart