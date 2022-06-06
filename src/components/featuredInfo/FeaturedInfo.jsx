import React from 'react';
import './featuredInfo.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
    return(
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">오늘 방문한 유저 수</span>  {/*오늘 방문한 유저 수*/}
                <div className="featuredUsersContainer">
                    <span className="featuredUsers">41</span> {/*오늘 방문한 유저 수*/}
                    <span className="featuredUsersRate">
                    <ArrowUpwardIcon className="featuredIcon Negative" />   {/*증가 아이콘*/}           
                    </span>
                </div>
                <span className="featuredSub">지난 달 보다 증가했습니다</span>   {/*지난 분기와 비교정보*/}
          </div>

          <div className="featuredItem">
                <span className="featuredTitle">퀴즈 추가 수</span>
                <div className="featuredUsersContainer">
                    <span className="featuredUsers">200</span> {/* 퀴즈 수 */}
                    <span className="featuredUsersRate">    
                        <ArrowUpwardIcon className="featuredIcon Negative"/>   {/*증가 아이콘*/}  
                    </span>
                </div>
                <span className="featuredSub">지난 달 보다 증가했습니다</span>   {/*지난 분기와 비교정보*/}
          </div>

          <div className="featuredItem">
                <span className="featuredTitle">신규 유저</span>
                <div className="featuredUsersContainer">
                    <span className="featuredUsers">26</span> {/*총 유저 수*/}
                    <span className="featuredUsersRate">    
                        <ArrowUpwardIcon className="featuredIcon Negative"/>   {/*증가 아이콘*/}  
                    </span>
                </div>
                <span className="featuredSub">지난 달 보다 증가했습니다</span>   {/*지난 분기와 비교정보*/}
          </div>
        </div>
    )
}