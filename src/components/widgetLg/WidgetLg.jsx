import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({ type }) => {
       return <button className={'widgetLgButton ' + type}>{type}</button>   /*상태값 status에 따라서 버튼에 다른 css를 button을 적용*/ 
    }      
    return ( 
    <div className="widgetLg">
        <h3 className="widgetLgTitle">마지막으로 접속한 퀴즈 유저</h3>       {/*헤더 이름*/}
    <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">유저</th>        
            <th className="widgetLgTh">날짜</th>
            <th className="widgetLgTh">나이</th>
            <th className="widgetLgTh">상태</th> 
        </tr>    
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img  
                    src = "https://static.smalljoys.me/2021/03/5145246_a452aff9b7ec4a598ef03ddb7740f9cb_1616578548.JPG"
                    alt = ""
                    className="widgetLgImg"
                  />
                <span className="widgetLgName">Jrong</span>
            </td>
            <td className="widgetLgDate">2022/4/20</td>
            <td className="widgetLgAmount">11</td>
            <td className="widgetLgStatus">
                <Button type="Approved" /> {/* type에 대한 버튼명 넣어주기*/}
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img  
                    src = "https://user-images.githubusercontent.com/49392673/171630282-74fafc90-efd8-4a28-9489-4e63b307ea05.jpg"
                    alt = ""
                    className="widgetLgImg"
                    />
                <span className="widgetLgName">Soohong</span>
            </td>
            <td className="widgetLgDate">2022/4/21</td>
            <td className="widgetLgAmount">26</td>
            <td className="widgetLgStatus">
                <Button type="Declined" />
            </td>
          </tr>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img  
                    src = "https://contents.creators.mypetlife.co.kr/content/uploads/2020/06/20005851/1838_3993_3451.png"
                    alt = ""
                    className="widgetLgImg"
                    />
                <span className="widgetLgName">Yongki</span>
            </td>
            <td className="widgetLgDate">2022/4/22</td>
            <td className="widgetLgAmount">26</td>
            <td className="widgetLgStatus">
                <Button type="Panding" />
            </td>
          </tr>
        </table>    
    </div>    
    
    )
}
