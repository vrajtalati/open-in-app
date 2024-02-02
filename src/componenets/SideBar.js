import React from 'react';
import Settings from './images/Setting.svg';
import Calender from './images/Calendar.svg';
import Notification from './images/Notification.svg';
import Document from './images/Document.svg';
import Chart from './images/Chart.svg';
import Ticket from './images/Ticket.svg';
import Category from './images/Category.svg';



const SideBar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <img src={Category} alt="Dashboard" className="w-6 h-6 mr-2" /> },
    { text: 'Upload', icon: <img src={Chart} alt="Transactions" className="w-6 h-6 mr-2" /> },
    { text: 'Invoice', icon: <img src={Ticket} alt="Schedules" className="w-6 h-6 mr-2" /> },
    { text: 'Schedule', icon: <img src={Document} alt="Users" className="w-6 h-6 mr-2" /> },
    { text: 'Calendar', icon: <img src={Calender} alt="Settings" className="w-6 h-6 mr-2" /> },
    { text: 'Notification', icon: <img src={Notification} alt="Settings" className="w-6 h-6 mr-2" /> },
    { text: 'Settings', icon: <img src={Settings} alt="Settings" className="w-6 h-6 mr-2" /> },
  ];

  return (
    <div className="sidebar__container flex flex-col items-center bg-white text-gray-400 p-4 shadow-md"
         style={{ width: '218px', height: '1047px', top: '-1px', position: 'absolute' }}
    > 
      <div className="flex items-center ">
      <div className="circle w-16 h-16 bg-violet-200 rounded-full flex items-center justify-center mb-4">
        </div>
        <div className=" text-gray-900 font-nunito text-4xl font-semibold leading-33text-lg p-5">
          Base
        </div>
        </div>

      <ul className="nav__links">
        {menuItems.map((item, index) => (
          <li className="nav__link" key={index}>
            <a href="http://" target="_blank" rel="noopener noreferrer" className="flex items-center p-2">
              {item.icon}
              <span className="text-nunito text-lg font-semibold mx-8 my-4">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
