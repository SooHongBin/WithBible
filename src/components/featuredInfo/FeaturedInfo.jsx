import React from 'react';
import './featuredInfo.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Today Users</span>  {/*오늘 방문한 유저 수*/}
                <div className="featuredUsersContainer">
                    <span className="featuredUsers">41</span> {/*오늘 방문한 유저 수*/}
                    <span className="featuredUsersRate">
                    <ArrowUpwardIcon className="featuredIcon Negative" />   {/*증가 아이콘*/}           
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>   {/*지난 분기와 비교정보*/}
          </div>

          <div className="featuredItem">
                <span className="featuredTitle">Add Quiz</span>
                <div className="featuredUsersContainer">
                    <span className="featuredUsers">200</span> {/* 퀴즈 수 */}
                    <span className="featuredUsersRate">    
                        <ArrowUpwardIcon className="featuredIcon Negative"/>   {/*증가 아이콘*/}  
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>   {/*지난 분기와 비교정보*/}
          </div>

          <div className="featuredItem">
                <span className="featuredTitle">New Users</span>
                <div className="featuredUsersContainer">
                    <span className="featuredUsers">26</span> {/*총 유저 수*/}
                    <span className="featuredUsersRate">    
                        <ArrowUpwardIcon className="featuredIcon Negative"/>   {/*증가 아이콘*/}  
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>   {/*지난 분기와 비교정보*/}
          </div>
        </div>
    )
}