import React, { useState, useEffect } from 'react';

import { FaRegCalendar } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

import ReactApexChart from 'react-apexcharts';





const MiddleDashboard = () => {
    const series = [
        {
            name: 'Series 1',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 150, 160], 
        },
        {
            name: 'Series 2',
            data: [20, 29, 37, 36, 44, 45, 50, 58, 80, 95, 110, 120],
        },
    ];

    const options = {
        chart: {
            id: 'static-chart',
            height: 0,
            type: 'line',
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 4,
        },
        markers: {
            size: 4, 
        },
        colors: ['#01B529', '#FF0000'], // Custom colors for the two lines
        xaxis: {
            categories: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
            ], // Month names on the x-axis
            labels: {
                style: {
                    colors: '#000000',
                    fontSize: '12px',
                },
            },
        },
        yaxis: {
            max: 200,
            labels: {
                style: {
                    colors: '#000000',
                    fontSize: '12px',
                },
            },
        },
        legend: {
            show: true,
            position: 'bottom', 
        },
    };


    return (
        <>
            <div className='middledashboardcontainer'>
                <div className='middledashboardsubcontainer'>
                    <div className='middledashboardleft'>
                        <div className='middledashboardleftcontent'>
                            <div className='middledashboardleftmonth'>
                                <FaRegCalendar color='#000000' />
                                <select name="" id="">
                                    <option value="">This month</option>
                                    <option value="">January</option>
                                    <option value="">February</option>
                                    <option value="">March</option>
                                    <option value="">April</option>
                                    <option value="">May</option>
                                    <option value="">June</option>
                                    <option value="">July</option>
                                    <option value="">August</option>
                                    <option value="">September</option>
                                    <option value="">October</option>
                                    <option value="">November</option>
                                    <option value="">December</option>
                                </select>
                            </div>
                            <div className='middledashboardleftamount'>
                                <div className='middledashboardleftamounttotal'>
                                    <h6>37.5K</h6>
                                    <p>
                                        Active User
                                        <span>
                                            <IoMdArrowDropup color='#121212' size={20} />
                                            <span>+2.45%</span>
                                        </span>
                                    </p>
                                </div>
                                <div className='middledashboardleftlastmonth'>
                                    <FaCircleCheck color='#121212' />
                                    <h6>Up From Last Month</h6>
                                </div>
                            </div>
                        </div>
                        <div className='middledashboardleftchart'>
                            <div id="chart">
                                <ReactApexChart options={options} series={series} type="line" height={310} />
                            </div>
                        </div>
                    </div>
                    <div className='middledashboardright'>
                        <div className='middledashboardrightheading'>
                            <h6>Subscription Revenue</h6>
                        </div>
                        <div className='middledashboardrightamounttotal'>
                            <div className='middledashboardrightamount'>
                                <h4>37.5K</h4>
                                <p>From Active User</p>
                                <span>
                                    <IoMdArrowDropup color='#121212' size={25} />
                                    <span>+2.45%</span>
                                </span>
                                <div className='middledashboardrightlastmonth'>
                                    <FaCircleCheck color='#121212' size={25}/>
                                    <h6>Up From Last Month</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiddleDashboard