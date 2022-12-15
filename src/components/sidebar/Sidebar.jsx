import React from 'react'
import './sidebar.css' 
import HomeWorkIcon from '@mui/icons-material/HomeWork'; /*Home 아이콘*/
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; /*Analytics 아이콘*/
import AddIcon from '@mui/icons-material/Add'; /*Add Quiz 아이콘*/
import RemoveIcon from '@mui/icons-material/Remove'; /*Remove Quiz 아이콘*/
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; /*Users 아이콘*/
import BarChartIcon from '@mui/icons-material/BarChart'; /*Reports 아이콘*/
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'; /*Add Photo 아이콘*/
import MailOutlineIcon from '@mui/icons-material/MailOutline'; /*Mail 아이콘*/
import FeedbackIcon from '@mui/icons-material/Feedback'; /*Feedback 아이콘*/
import ChatIcon from '@mui/icons-material/Chat';    /*Messages 아이콘*/
import { Link } from 'react-router-dom'

export default function sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">                       {/*사이드바 메뉴 */}
                <h3 className="sidebarTitle">대쉬보드</h3>      {/*대쉬보드 타이틀 출력*/}
                <u1 className="sidebarList">                    {/*사이드바 리스트 불러오기*/}
                    <Link to="//localhost:3000/" className='link'>
                    <li className="sidebarListItem active">     {/*사이드바 리스트 출력 및 색상입히기*/}
                     <HomeWorkIcon className="sidebarIcon"/>    {/*사이드바에 Home 아이콘 및 메뉴 출력*/}
                    홈
                    </li>
                    </Link>
                    <Link to="//localhost:3000/chartlist" className='link'>
                    <li className="sidebarListItem">            {/*사이드바 리스트 출력*/}
                    <TrendingUpIcon className="sidebarIcon"/>   {/*사이드바에 Analytics 메뉴 출력*/}
                    차트
                    </li>
                    </Link>
                    <li className="sidebarListItem active">     {/*사이드바 리스트 출력 및 색상입히기*/}
                     <AddIcon className="sidebarIcon"/>         {/*사이드바에 AddQuiz 아이콘 및 메뉴 출력*/}
                    퀴즈추가
                    </li>
                    <li className="sidebarListItem">            {/*사이드바 리스트 출력*/}
                    <RemoveIcon className="sidebarIcon"/>       {/*사이드바에 Remove Quiz 아이콘 및 메뉴 출력*/}
                     퀴즈삭제
                    </li>
                </u1>          
           </div>
           <div className="sidebarMenu">                         {/*사이드바 메뉴 */}
                <h3 className="sidebarTitle">유저메뉴</h3>       {/*유저메뉴 타이틀 출력*/}            
                <u1 className="sidebarList">                     {/*사이드바 리스트 불러오기*/}
                    <Link to="/users" className='link'>
                    <li className="sidebarListItem active">      {/*사이드바 리스트 출력 및 색상입히기*/}   
                     <PersonOutlineIcon className="sidebarIcon"/>   {/*사이드바에 Users 아이콘 및 메뉴 출력*/}
                    유저관리
                    </li>
                    </Link>
                    <Link to="/reports" className='link'>
                    <li className="sidebarListItem">            {/*사이드바 리스트 출력*/}
                     <BarChartIcon className="sidebarIcon"/>    {/*사이드바에 Reports 아이콘 및 메뉴 출력*/}
                    유저 통계
                    </li>
                    </Link>
                    <li className="sidebarListItem active">     {/*사이드바 리스트 출력 및 색상입히기*/}
                     <AddAPhotoIcon className="sidebarIcon"/>   {/*사이드바에 Add Photos 아이콘 및 메뉴 출력*/}
                    사진 추가
                    </li>
                </u1>
           </div>

           <div className="sidebarMenu">                          {/*사이드바 메뉴 */}
                <h3 className="sidebarTitle">알림</h3>            {/*알림 타이틀 출력*/}  
                <u1 className="sidebarList">                      {/*사이드바 리스트 불러오기*/}  
                    <li className="sidebarListItem active">       {/*사이드바 리스트 출력 및 색상입히기*/}
                     <MailOutlineIcon className="sidebarIcon"/>   {/*사이드바에 Mail 아이콘 및 메뉴 출력*/}
                    메일
                    </li>
                    <li className="sidebarListItem">              {/*사이드바 리스트 출력 */}
                    <FeedbackIcon className="sidebarIcon"/>       {/*사이드바에 Feedback 아이콘 및 메뉴 출력*/}
                    피드백
                    </li>
                    <li className="sidebarListItem active">       {/*사이드바 리스트 출력 및 색상입히기*/}
                     <ChatIcon className="sidebarIcon"/>          {/*사이드바에 Messages 아이콘 및 메뉴 출력*/}
                    메시지
                    </li>
                </u1>
           </div>
        </div>
    </div>
    )
}

