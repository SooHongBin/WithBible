import React from 'react'
import './chart.css'
import {
     LineChart, 
     Line,
     XAxis,  
     CartesianGrid, 
     Tooltip, 
     ResponsiveContainer 
    } from 'recharts'

    export default function chart() { 
    const data = [
  {
    name: 'Jan',
    'Active User': 4490,
  },
  {
    name: 'Feb',
    'Active User': 3430,
  },
  {
    name: 'Mar',
    'Active User': 2490,
  },
  {
    name: 'Apr',
    'Active User': 3390,
  },
  {
    name: 'May',
    'Active User': 1230,
  },
  {
    name: 'Jun',
    'Active User': 5290,
  },
  {
    name: 'Jul',
    'Active User': 2390,
  },
  {
    name: 'Aug',
    'Active User': 4540,
  },
  {
    name: 'Sep',
    'Active User': 4235,
  },
  {
    name: 'Oct',
    'Active User': 4340,
  },
  {
    name: 'Nov',
    'Active User': 4500,
  },
  {
    name: 'Dec',
    'Active User': 4690,
  },
];

    return(
     <div className="chart"> {/*마우스로 그래프를 움직이면 상세정보 출력, 유저의 데이터 값을 받아와서 그래프로 출력 */}
      <h3 className="chartTitle">Users Analytics </h3>     
        <ResponsiveContainer width="100%" aspect={4 / 1}>    
            <LineChart data={data}>                           
                <XAxis dataKey="name" stroke="5550bd" />
                <Line type="monotone" dataKey="Active User" />  
                <Tooltip />  
                <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />    
            </LineChart>
        </ResponsiveContainer>
     </div>
   )
 }