import React from 'react'

import { FaDollarSign } from "react-icons/fa";
import { LuBarChart2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";


import img from '../../assest/img.jpg'

const TopDashboard = () => {
    return (
        <>
            <div className='topdashboardcontainer'>
                <div className='topdashboard'>
                    <div className='topdashboarddiv'>
                        <div className='topdashboardicon'>
                            <FaDollarSign color='#FFFFFF' />
                        </div>
                        <div className='topdashboardcontent'>
                            <p>Earnings</p>
                            <h5>$350.4</h5>
                        </div>
                    </div>
                    <div className='topdashboarddiv'>
                        <div className='topdashboardicon'>
                            <FaDollarSign color='#FFFFFF' />
                        </div>
                        <div className='topdashboardcontent'>
                            <p>Ad Spend</p>
                            <h5>$682.5</h5>
                        </div>
                    </div>
                    <div className='topdashboarddiv'>
                        <div className='topdashboardicon'>
                            <FaDollarSign color='#FFFFFF' />
                        </div>
                        <div className='topdashboardcontent'>
                            <p>New Subscription</p>
                            <h5>$574.34</h5>
                        </div>
                    </div>
                    <div className='topdashboarddiv'>
                        <div className='topdashboardcontent'>
                            <p>Country</p>
                            <h5>India</h5>
                        </div>
                        <div className='topdashboardselectcontory'>
                            <div className='topdashboardselected'>
                                <img src={img} alt="" />
                            </div>
                            <IoIosArrowDown color='#3BD9C9' />
                        </div>
                    </div>
                    <div className='topdashboarddiv'>
                        <div className='topdashboardicon'>
                            <LuBarChart2 color='#FFFFFF' />
                        </div>
                        <div className='topdashboardcontent'>
                            <p>New Users</p>
                            <h5>154</h5>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default TopDashboard