import React from 'react'
import './widgetLg.css'

export default function WidgetLg() {
    const Button = ({ type }) => {
       return <button className={'widgetLgButton ' + type}>{type}</button>   /*상태값 status에 따라서 버튼에 다른 css를 button을 적용*/ 
    }      
    return ( 
    <div className="widgetLg">
        <h3 className="widgetLgTitle">Latest transactions</h3>       {/*헤더 이름*/}
    <table className="widgetLgTable">
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>        
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Age</th>
            <th className="widgetLgTh">Status</th> 
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
            <td className="widgetLgDate">20 April 2022</td>
            <td className="widgetLgAmount">11</td>
            <td className="widgetLgStatus">
                <Button type="Approved" /> {/* type에 대한 버튼명 넣어주기*/}
            </td>
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
            <td className="widgetLgDate">20 April 2022</td>
            <td className="widgetLgAmount">11</td>
            <td className="widgetLgStatus">
                <Button type="Declined" />
            </td>
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
            <td className="widgetLgDate">20 April 2022</td>
            <td className="widgetLgAmount">11</td>
            <td className="widgetLgStatus">
                <Button type="Panding" />
            </td>
          </tr>
        </table>    
    </div>    
    
    )
}
