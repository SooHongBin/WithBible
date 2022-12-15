import React from 'react'
import './chartList.css'
import Chart from '../../components/chart/Chart'
import { chartListData } from '../../dummyData'

export default function ChartList() {
    return(
    <div className="chartList">
        <div className="chartTitleContainer">
            <h1 className="chartTitle">월별 차트</h1>
        </div> 
            <div className="chartListTop">
                <div className="chartListTopLeft">    
                <Chart data={chartListData} datakey="Active" title="월별 유저 증가 수" />
               </div>    
            </div>            
        </div>
    )
}