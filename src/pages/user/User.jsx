import React from 'react'
import './user.css'
import {
    PermIdentity,
    CalendarToday,
    PhoneIphone,
    MailOutline,
    LocationOn,
    Publish,
}   from '@mui/icons-material'
import { Link } from 'react-router-dom'

export default function User() {
    return(
     <div className="user">
         <div className="userTitleContainer">
            <h1 className="userTitle">유저 관리</h1>
            <Link to="/newUser">
            <button className="userAddButton">만들기</button>
            </Link>
        </div>  
        <div className="userContainer"> 
            <div className="userShow"> 
             <div className="userShowTop"> 
                <img
                    src="https://static.smalljoys.me/2021/03/5145246_a452aff9b7ec4a598ef03ddb7740f9cb_1616578548.JPG"
                    alt=""
                    className="userShowImg"
                />
                <div className="userShowTopTitle">
                    <span className="userShowTopTitle">Soohong</span>
                    <span className="userShowUserTitle">Student</span>
                </div>
             </div>
             <div className="userShowBottom">
             </div> 
                <span className="userShowTitle">유저 정보</span>
                <div className="usershowInfo">
                    <PermIdentity className="userShowIcon" />
                    <span className="userShowInfoTitle">soohong97</span>    
                </div>   
                <div className="userShowInfo">
                    <CalendarToday className="userShowIcon" />     
                    <span className="usershowInfoTitle">1997.09.11</span>
                </div>    
                <span className="userShowTitle">유저 세부 정보</span>
                    <div className="userShowInfo">
                    <MailOutline className="usershowIcon" />
                    <span className="userShowInfoTitle">soohong970911@gmail.com</span>
                </div>
                </div>    
            <div className="userUpdate"> 
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                        <label>유저 닉네임</label>
                        <input
                            type="text"
                            placeholder="soohong97"
                            className="userUpdateInput"
                        />                        
                    </div>
                    <div className="userUpdateItem">
                        <label>유저 이름</label>
                        <input
                            type="text"
                            placeholder="Parksoohong"
                            className="userUpdateInput"
                        />
                    </div>
                    <div className="userUpdateItem">
                        <label>이메일</label>
                        <input
                            type="text"
                            placeholder="soohong970911@gmail.com"
                            className="userUpdateInput"
                        />
                    </div>
                        <div className="userUpdateRight">
                        <div className="userUpdateUpload">                          
                            <img
                                src="https://user-images.githubusercontent.com/49392673/171630282-74fafc90-efd8-4a28-9489-4e63b307ea05.jpg"
                                alt=""
                                className="userUpdateImg"
                            />
                            <label htmlfor="file">
                                <Publish className="userUpdateIcon" />
                            </label>
                            <input type="file" id="file"  />
                            </div> 
                            <button className="userUpdateButton">업로드</button>
                        </div>
                     </div>
                </form>
            </div>  
         </div>
    </div>  
    )
}  
