import React from 'react'
import './Lchart.scss'
// import Basic3 from '../src/Basic3/basic3.jsx' 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Янв',
    Студенты: 30,
    Университеты: 0,
    Страны: 10,
    Факультеты: 21,
  },
  {
    name: '',
    Студенты: 40,
    Университеты: 7,
    Страны: 17,
    Факультеты: 30,
  },
  {
    name: 'Мар',
    Студенты: 30,
    Университеты: 20,
    Страны: 13,
    Факультеты: 25,
  },
  {
    name: '',
    Студенты: 40,
    Университеты: 17,
    Страны: 10,
    Факультеты: 25,
  },
  {
    name: '',
    Студенты: 50,
    Университеты: 29,
    Страны: 7,
    Факультеты: 31,
  },
  {
    name: 'Июн',
    Студенты: 50,
    Университеты: 30,
    Страны: 8,
    Факультеты: 35,
  },
  {
    name: '',
    Студенты: 100,
    Университеты: 26,
    Страны: 17,
    Факультеты: 57,
  },
  {
    name: '',
    Студенты: 90,
    Университеты: 26,
    Страны: 17,
    Факультеты: 61,
  },
  {
    name: 'Сен',
    Студенты: 95,
    Университеты: 35,
    Страны: 20,
    Факультеты: 95,
  },
  {
    name: '',
    Студенты: 90,
    Университеты: 40,
    Страны: 19,
    Факультеты: 88,
  },
  {
    name: '',
    Студенты: 90,
    Университеты: 40,
    Страны: 19,
    Факультеты: 68,
  },
  {
    name: '',
    Студенты: 100,
    Университеты: 60,
    Страны: 20,
    Факультеты: 55,
  },
  {
    name: 'Дек'
  },
];
function LChart() {

  return (

    <React.Fragment>
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <p>Студенты по семестрам</p>
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" iconType="square" height={40} />
            <Line type="monotone" dataKey="Студенты" stroke="#000D7F" strokeWidth={1.7} activeDot={{ r: 7 }} />
            <Line type="monotone" dataKey="Университеты" stroke="#E96383" strokeWidth={1.7} activeDot={{ r: 7 }} />
            <Line type="monotone" dataKey="Страны" stroke="#FCCA58" strokeWidth={1.7} activeDot={{ r: 7 }} />
            <Line type="monotone" dataKey="Факультеты" stroke="#10CC9B" strokeWidth={1.7} activeDot={{ r: 7 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </React.Fragment>
  )
}
export default LChart
{/* <Basic3 /> */ }