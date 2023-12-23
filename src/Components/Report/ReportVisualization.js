import React from 'react'


function ReportVisualization({data}) {
  return (
    <>
    <div>{data.name}</div>
    <h1>{data.email}</h1>
    {console.log(data)}
    <div>
      {/* <UserDataChart userData={data} /> */}
      {/* Other components or content */}
    </div>
    </>
  )
}

export default ReportVisualization
