import React from 'react'
import { Link } from 'react-router-dom' //react-roter-dom 을 사용해 Link를 사용해 유저 상세정보 출력
import './userList.css'
import { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData'
import { DataGrid } from '@mui/x-data-grid'

export default function UserList() {
    const [data, setData] = useState(userRows)      //setData 함수를 사용해 데이터 삭제 가능
    const handleDelete = (id) => {                  //handleDelete 함수에서 id를 받아서, 기존 데이터 중에서 같은 id를 제거하고 나머지 state에 저장
        setData(data.filter((item) => item.id !== id))
    }

const columns = [
    {field: 'id', headerName: '번호', width: 70 },
    {
        field: 'user', 
        headerName: '유저',
        width: 200 ,
        renderCell: (params) => {
            return(
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt="" />  
                    {params.row.username}
            </div>
          )
        },
    },
    {field: 'email', headerName: '이메일', width: 200 },
    {
        field: '상태',
        headerName: '상태',
        width: 110,
    },
    {
        field: '정답률',
        headerName: '정답률',
        width: 130,
    },   
    {
        field: 'action',
        headerName: '유저추가/삭제',
        width: 150,
        renderCell: (params) => {
            //Link를 사용해 유저 리스트 관리
            return (
                <>
                    <Link to={'/user/' + params.row.id}>
                    <button className="userListEdit">추가</button>
                    </Link>
                    <DeleteOutlineIcon
                    className="userListDelete"
                    onClick={() => handleDelete(params.row.id)}
                    />
                </>
            )
        },
    },
]
    // 컬럼 내 유저 리스트를 가져옴
    return(
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}