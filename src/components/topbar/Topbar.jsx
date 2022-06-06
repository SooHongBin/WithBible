import React from 'react'
import './topbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';  /*종모양 아이콘 */
import LanguageIcon from '@mui/icons-material/Language';                    /*지구모양 아이콘 */
import SettingsIcon from '@mui/icons-material/Settings';                    /*톱니바퀴 아이콘 */

export default function Topbar() {
    return(
        <div className="topbar">
          <div className="topbarWrapper">
            <div className= "topLeft">
                <span className="logo">위드바이블</span>       {/*왼쪽 상단 Topbar 제목 */}
              </div>          
              <div className="topRight">
                <div className="topbarIconContainer">          {/* topbar 종모양 Icon*/}
                <NotificationsNoneIcon />
                <span className="topIconBadge">9+</span>       {/*알림표시*/}
                </div>
                <div className="topbarIconContainer">          {/*topbar 지구모양 Icon*/}
                <span className="topIconBadge">2</span>        {/*알림표시*/}
                <LanguageIcon />
                </div>           
                <div className="topbarIconContainer">          {/*topbar 톱니바퀴 모양 Icon*/} 
                <SettingsIcon />       
                <img
                  src="https://user-images.githubusercontent.com/49392673/171630282-74fafc90-efd8-4a28-9489-4e63b307ea05.jpg"
                  alt=""
                  className="topAvatar"
                />          {/*프로필사진 표시*/}
              </div>
            </div>
        </div>
    </div>
    )
}

