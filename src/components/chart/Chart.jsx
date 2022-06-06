import React from 'react'
import './chart.css'
import {
     LineChart, 
     Line,
     XAxis,  
     CartesianGrid, 
     Tooltip, 
     ResponsiveContainer 
    } from 'recharts';

    export default function chart({ title, data, datakey, grid}) { 
    return(
     <div className="chart"> {/*마우스로 그래프를 움직이면 상세정보 출력, 유저의 데이터 값을 받아와서 그래프로 출력 */}
      <h3 className="chartTitle">{title}</h3>     
        <ResponsiveContainer width="100%" aspect={4 / 1}>    
            <LineChart data={data}>                            
                <XAxis dataKey="name" stroke="5550bd" /> {/*X축 dataKey에 사용될 데이터를 지정 , storke는 색상*/}
                <Line type="monotone" dataKey={datakey} />  
                <Tooltip />  
               {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}   {/*그래프에 그리드 추가*/}
            </LineChart>
        </ResponsiveContainer>
     </div>
   )
 }