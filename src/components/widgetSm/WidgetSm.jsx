import React from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function WidgetSm() {
    return(  
    <div className="widgetSm">   
        <span className="widgetSmTitle">신규 유저</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img
                    src="https://static.smalljoys.me/2021/03/5145246_a452aff9b7ec4a598ef03ddb7740f9cb_1616578548.JPG"
                    alt=""
                    className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jrong</span>
                    <span className="widgetSmUserTitle">말티즈</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon" />
                    자세히
                 </button>
                </li>
                <li className="widgetSmListItem">
                <img
                    src="https://static.smalljoys.me/2021/03/5145246_a452aff9b7ec4a598ef03ddb7740f9cb_1616578548.JPG"
                    alt=""
                    className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Soohong</span>
                    <span className="widgetSmUserTitle">학생</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon" />
                    자세히
                 </button>
                </li>
                <li className="widgetSmListItem">
                <img
                    src="https://static.smalljoys.me/2021/03/5145246_a452aff9b7ec4a598ef03ddb7740f9cb_1616578548.JPG"
                    alt=""
                    className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Yongki</span>
                    <span className="widgetSmUserTitle">학생</span>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon" />    
                    자세히
                 </button>
                </li>
            </ul>
        </div>
    )
}
