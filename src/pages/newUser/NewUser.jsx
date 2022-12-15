import React from 'react'
import './newUser.css'
import { Link } from 'react-router-dom'

export default function NewUser() {
    return( 
    <div className="newUser">
        <h1 className="newUserTitle">유저생성</h1>
        <form className="newUserForm">
            <div className="newUserItem">
                <label>유저닉네임</label>
                <input type="text" placeholder="soohong97" />
            </div>
            <div className="newUserItem">
                <label>유저이름</label>
                <input type="text" placeholder="박수홍" />
            </div>
            <div className="newUserItem">
                <label>이메일</label>
                <input type="text" placeholder="soohong970911@gmail.com" />
            </div>
            <div className="newUserItem">
                <label>패스워드</label>
                <input type="text" placeholder="123a" />
            </div>
            <div className="newUserItem">
                <label>성별</label>
                <div className="newUserGender">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">남성</label>
                <input type="radio" name="gender" id="male" value="male" />
                <label for="female">여성</label>
             </div>
             <Link to="//localhost:3000/reports">
             <button className="newUserButton">만들기</button> 
             </Link>
            </div>
            <div className="newUserItem">
                <label>활성화</label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes">예</option>
                    <option value="no">아니오</option>
                </select>
             </div>          
            </form>        
         </div>     
)
}
