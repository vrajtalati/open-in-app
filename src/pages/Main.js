import React from 'react'
import SideBar from '../componenets/SideBar';
import UploadCsv from '../componenets/UploadCsv';

const Main = () => {
  return (
    <div className="flex flex-col flex-1">
      <div  ><SideBar/></div>
    
    <div className="my-40 mx-10" > <UploadCsv/></div>   
    </div>
  )
}

export default Main
