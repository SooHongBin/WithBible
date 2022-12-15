import React from 'react'
import './widgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'

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
                <Link to="//localhost:3000/reports" className='link'>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon" />
                    자세히
                 </button>
                 </Link>
                </li>
                <li className="widgetSmListItem">
                <img
                    src="https://user-images.githubusercontent.com/49392673/171630282-74fafc90-efd8-4a28-9489-4e63b307ea05.jpg"
                    alt=""
                    className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Soohong</span>
                    <span className="widgetSmUserTitle">학생</span>
                </div>
                <Link to="//localhost:3000/reports" className='link'>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon" />
                    자세히
                 </button>
                </Link>
                </li>
                <li className="widgetSmListItem">
                <img
                    src="https://contents.creators.mypetlife.co.kr/content/uploads/2020/06/20005851/1838_3993_3451.png"
                    alt=""
                    className="widgetSmImg"
                />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Yongki</span>
                    <span className="widgetSmUserTitle">학생</span>
                </div>
                <Link to="//localhost:3000/reports" className='link'>
                <button className="widgetSmButton">
                    <VisibilityIcon className="widgetSmIcon" />    
                    자세히
                 </button>
                 </Link>
                </li>
            </ul>
        </div>
    )
}
