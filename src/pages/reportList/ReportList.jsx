import React from 'react'
import './reportList.css'

import { DataGrid } from '@mui/x-data-grid'
import { DeleteOutline } from '@mui/icons-material'
import { reportRows } from '../../dummyData'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function ReportList() {
  const [data, setData] = useState(reportRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: '번호', width: 70 },
    {
        field: 'user',
        headerName: '유저',
        width: 200,
        renderCell: (params) => {
            return (
                <div className="reportListUser">
                    <img className="reportListImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
      },
    },
    { field: 'email', headerName: '이메일', width: 200 },
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
        headerName: '자세히',
        width: 150,
        renderCell: (params) => {
        return (
          <>
            <Link to={'/reports/' + params.row.id}>
              <button className="reportListEdit">보기</button>
            </Link>
            <DeleteOutline
              className="reportListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="reportList">
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