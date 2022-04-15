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


export default function sidebar() {
    return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">                       {/*사이드바 메뉴 */}
                <h3 className="sidebarTitle">Dashboard</h3>     {/*Dashboard 타이틀 출력*/}
                <u1 className="sidebarList">                    {/*사이드바 리스트 불러오기*/}
                    <li className="sidebarListItem active">     {/*사이드바 리스트 출력 및 색상입히기*/}
                     <HomeWorkIcon className="sidebarIcon"/>    {/*사이드바에 Home 아이콘 및 메뉴 출력*/}
                    Home
                    </li>
                    <li className="sidebarListItem">            {/*사이드바 리스트 출력*/}
                    <TrendingUpIcon className="sidebarIcon"/>   {/*사이드바에 Analytics 메뉴 출력*/}
                     Analytics
                    </li>
                    <li className="sidebarListItem active">     {/*사이드바 리스트 출력 및 색상입히기*/}
                     <AddIcon className="sidebarIcon"/>         {/*사이드바에 AddQuiz 아이콘 및 메뉴 출력*/}
                    Add Quiz
                    </li>
                    <li className="sidebarListItem">            {/*사이드바 리스트 출력*/}
                    <RemoveIcon className="sidebarIcon"/>       {/*사이드바에 Remove Quiz 아이콘 및 메뉴 출력*/}
                     Remove Quiz
                    </li>
                </u1>
          
           </div>
           <div className="sidebarMenu">                         {/*사이드바 메뉴 */}
                <h3 className="sidebarTitle">Quick</h3>          {/*Quick 타이틀 출력*/}            
                <u1 className="sidebarList">                     {/*사이드바 리스트 불러오기*/}
                    <li className="sidebarListItem active">      {/*사이드바 리스트 출력 및 색상입히기*/}   
                     <PersonOutlineIcon className="sidebarIcon"/>   {/*사이드바에 Users 아이콘 및 메뉴 출력*/}
                    Users
                    </li>
                    <li className="sidebarListItem">            {/*사이드바 리스트 출력*/}
                     <BarChartIcon className="sidebarIcon"/>    {/*사이드바에 Reports 아이콘 및 메뉴 출력*/}
                    Reports
                    </li>
                    <li className="sidebarListItem active">     {/*사이드바 리스트 출력 및 색상입히기*/}
                     <AddAPhotoIcon className="sidebarIcon"/>   {/*사이드바에 Add Photos 아이콘 및 메뉴 출력*/}
                    Add Photos
                    </li>
                </u1>
           </div>

           <div className="sidebarMenu">                          {/*사이드바 메뉴 */}
                <h3 className="sidebarTitle">notification</h3>    {/*notification 타이틀 출력*/}  
                <u1 className="sidebarList">                      {/*사이드바 리스트 불러오기*/}  
                    <li className="sidebarListItem active">       {/*사이드바 리스트 출력 및 색상입히기*/}
                     <MailOutlineIcon className="sidebarIcon"/>   {/*사이드바에 Mail 아이콘 및 메뉴 출력*/}
                    Mail
                    </li>
                    <li className="sidebarListItem">              {/*사이드바 리스트 출력 */}
                    <FeedbackIcon className="sidebarIcon"/>       {/*사이드바에 Feedback 아이콘 및 메뉴 출력*/}
                     Feedback
                    </li>
                    <li className="sidebarListItem active">       {/*사이드바 리스트 출력 및 색상입히기*/}
                     <ChatIcon className="sidebarIcon"/>          {/*사이드바에 Messages 아이콘 및 메뉴 출력*/}
                    Messages
                    </li>
                </u1>
           </div>
        </div>
    </div>
    )
}

