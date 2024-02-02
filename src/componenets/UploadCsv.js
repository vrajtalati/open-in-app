import React from 'react';
import Frame from './images/Frame.svg'

const UploadCsv = () => {
  return (
    <div className="flex flex-col items-center">
       <div className= " ml-20 w-390 h-60 flex-shrink-0 border-2 border-dashed border-gray-300 rounded-md p-4 bg-white flex items-center justify-center">
  
       <img className="p-20" src={Frame}></img>
      </div>
      <button className=" ml-20 mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
        Upload
      </button>
    </div>
  );
}

export default UploadCsv;

