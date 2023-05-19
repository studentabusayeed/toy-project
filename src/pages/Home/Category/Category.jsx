// import React, { useState } from 'react';
import './Category.css';

const Category = () => {
    // const [activeTab, setActiveTab] = useState("remote");
    // const handleTabClick = (tabName) => {
    //     setActiveTab(tabName);
    //   };
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-8 text-cyan-600'>Shop by category</h2>
            <div className='flex justify-center'>
                <div className="divider w-1/2"></div>
            </div>
            {/* <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("remote")}
              className={`tab  tab2 remote ${
                activeTab == "remote" ? " bg-danger text-white" : ""
              }`}
            >
              Remote
            </div>
            <div
              onClick={() => handleTabClick("offline")}
              className={`tab  tab2 Offline ${
                activeTab == "offline" ? " bg-danger text-white" : ""
              }`}
            >
              Offline
            </div>
          </div>
        </div>
      </div> */}
        </div>
    );
};

export default Category;