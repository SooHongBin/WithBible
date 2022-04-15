import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'  /*FeaturedInfo 컴포넌트 home 페이지에 추가*/
import './home.css'

export default function Home() {
    return (
    <div className="home">
        <FeaturedInfo />   {/*FeaturedInfo 컴포넌트 home 페이지에 추가*/}
        <Chart />
    </div>
    )
}