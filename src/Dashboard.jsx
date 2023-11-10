import React, { useState } from 'react'
import "./styles/Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-group-wrapper">
        <div className="dashboard-group">
        <div className="box">
          <div className="head-group">
            <div className="image">
              <div className="overlap">
                <img className="clothing-rack" alt="Clothing rack" src="./assets/dashboard/fashion-recommendation.png" />
                <div className="head-fade">
                  <div className="overlap-group">
                    <div className="navbar">
                      <div className="nav-tabs">
                        <a className="text-wrapper" href='/frs'>FRS</a>
                        <a className="div" href='/about'>ABOUT US</a>
                        <a className="text-wrapper-2" href='/'>HOME</a>
                        <a className="text-wrapper-3" href='/discover'>DISCOVER</a>
                      </div>
                    <div className="rectangle" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
