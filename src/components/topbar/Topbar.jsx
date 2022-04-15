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
                  src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/47448086-9b02-4313-9a45-39350510a652/bible-app-logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220414T083439Z&X-Amz-Expires=86400&X-Amz-Signature=88f3a734df6bc1c1f505e25f22820e32fcddde78f509fffea49af10df140291d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bible-app-logo.png%22&x-id=GetObject"
                  alt=""
                  className="topAvatar"
                />          {/*프로필사진 표시*/}
              </div>
            </div>
        </div>
    </div>
    )
}

