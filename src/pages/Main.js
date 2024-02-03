import React from 'react';
import UploadCsv from '../componenets/UploadCsv';
import SideBar from '../componenets/SideBar'
const Main = () => {
  return (
    <div className="w-100" style={{ display: 'flex' }}>
      <div className=" w-1/4 bg-black-100" style={{ flex: '0 0 20vw',}}>
        <SideBar />
      </div>

      <div className="w-3/4" style={{ flex: '0 0 auto', height:'100%',}}>
        <UploadCsv />
      </div>
    </div>
  );
};

export default Main;
