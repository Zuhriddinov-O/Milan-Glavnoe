import React from 'react'
import './Bchart.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data1 = [
    {
        name: 'Летний',
        uv: 14,
        pv: 2400,
        amt: 2400,
        fill: "#000D7F"
    },
    {
        name: 'Осенний',
        uv: 30,
        pv: 1398,
        amt: 2210,
        fill: "#EF476F"
    },
    {
        name: 'Зимний',
        uv: 50,
        pv: 9800,
        amt: 2290,
        fill: "#FCCA58"
    },
    {
        name: 'Весенний',
        uv: 60,
        pv: 3908,
        amt: 2000,
        fill: "#10CC9B"
    },
];

const data2 = [
    {
        name: 'Матем...',
        uv: 14,
        pv: 2400,
        amt: 2400,
        fill: "#000D7F"
    },
    {
        name: 'Англ. язык',
        uv: 30,
        pv: 1398,
        amt: 2210,
        fill: "#EF476F"
    },
    {
        name: 'Физика',
        uv: 50,
        pv: 9800,
        amt: 2290,
        fill: "#FCCA58"
    },
    {
        name: 'Бизнесс',
        uv: 60,
        pv: 3908,
        amt: 2000,
        fill: "#10CC9B"
    },
];

function Bchart() {

    return (
        <React.Fragment>
            <div className="barcharts">
                <div className="barchart1">
                    <p className="barchartP1">Студенты по семестрам</p>
                    <ResponsiveContainer style={{ borderRadius: "6px 6px 0px 0px" }} width="75%" height="95%" strokeDasharray="3 3">
                        <BarChart data={data1}>
                            <XAxis dataKey="name" />
                            <Bar dataKey="uv" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="barchart2">
                    <p className="barchartP2">Самые популярные факультеты</p>
                    <ResponsiveContainer style={{ borderRadius: "6px 6px 0px 0px" }} width="75%" height="95%" strokeDasharray="3 3">
                        <BarChart data={data2}>
                            <XAxis dataKey="name" />
                            <Bar dataKey="uv" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bchart