import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'  /*FeaturedInfo 컴포넌트 home 페이지에 추가*/
import './home.css'
import { userData } from'../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'


export default function Home() {
    return (
     <div className="home">
        <FeaturedInfo />   {/*FeaturedInfo 컴포넌트 home 페이지에 추가*/}
        <Chart 
            data={userData}
            title="월별 유저 증가 수"
            grid
            datakey="Active User"
        />
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
    )
}