import React, { useState, useEffect } from 'react';
import Settings from './images/Setting.svg';
import Calender from './images/Calendar.svg';
import Notification from './images/Notification.svg';
import Document from './images/Document.svg';
import Chart from './images/Chart.svg';
import Ticket from './images/Ticket.svg';
import Category from './images/Category.svg';
import logoline from '../componenets/images/logosidebar.svg';

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { text: 'Dashboard', icon: <img src={Category} alt="Dashboard" className="w-6 h-6 mr-2" /> },
    { text: 'Upload', icon: <img src={Chart} alt="Transactions" className="w-6 h-6 mr-2" /> },
    { text: 'Invoice', icon: <img src={Ticket} alt="Schedules" className="w-6 h-6 mr-2" /> },
    { text: 'Schedule', icon: <img src={Document} alt="Users" className="w-6 h-6 mr-2" /> },
    { text: 'Calendar', icon: <img src={Calender} alt="Settings" className="w-6 h-6 mr-2" /> },
    { text: 'Notification', icon: <img src={Notification} alt="Settings" className="w-6 h-6 mr-2" /> },
    { text: 'Settings', icon: <img src={Settings} alt="Settings" className="w-6 h-6 mr-2" /> },
  ];

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="lg:flex relative">
      {/* Hamburger Menu Button */}
      <button onClick={handleToggleSidebar} className="lg:hidden p-2 focus:outline-none">
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`lg:flex lg:flex-col items-center bg-white text-gray-400 p-4 shadow-md ${
          !isSidebarOpen && window.innerWidth < 768 ? 'hidden' : ''
        }`}
        style={{ width: '218px', height: '1047px', top: '-1px', position: 'absolute' }}
      >
        {/* Close Button for Small Screens */}
        {window.innerWidth < 768 && isSidebarOpen && (
          <button onClick={handleCloseSidebar} className="absolute top-2 right-2 p-2 focus:outline-none">
            &times;
          </button>
        )}
        <div className="flex items-center">
          <div className="circle rounded-full flex items-center justify-center mb-4">
            <img src={logoline} alt="Logo" />
          </div>
        </div>

        <ul className="nav__links">
          {menuItems.map((item, index) => (
            <li className="nav__link" key={index}>
              <a
                href="http://"
               
                
                className="flex items-center p-2 hover:bg-gray-200"
              >
                {item.icon}
                <span className="text-nunito text-lg font-semibold mx-8 my-4">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
