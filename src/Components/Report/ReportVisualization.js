import React from 'react'
import BarChartComponent from './BarChartComponent'


function ReportVisualization({data}) {
  return (
    <>
    <div>{data.name}</div>
    <h1>{data.email}</h1>
    {console.log(data)}
    <div>
      {/* <BarChartComponent></BarChartComponent> */}
      {/* <UserDataChart userData={data} /> */}
      {/* Other components or content */}
    </div>
    </>
  )
}

export default ReportVisualization
