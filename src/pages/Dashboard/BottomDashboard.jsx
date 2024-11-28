import React from 'react'
import ReactApexChart from 'react-apexcharts';


import { IoMdArrowDropup } from "react-icons/io";


const BottomDashboard = () => {
    const series = [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66], // Static data
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 300,
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '40%', // Customize column width
                borderRadius: 5, // Rounded edges for bars
            },
        },
        colors: ['#000000'], // Customized bar color
        dataLabels: {
            enabled: false, // Disable data labels on bars
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9], // Numerical values on x-axis
            title: {
                style: {
                    fontWeight: 600,
                    fontSize: '14px',
                },
            },
        },
        yaxis: {
            title: {
                style: {
                    fontWeight: 600,
                    fontSize: '14px',
                },
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: (val) => `$ ${val} thousands`, // Tooltip format
            },
        },
    };

    return (
        <>
            <div className='bottomdashboardcontainer'>
                <div className='bottomdashboardfirstdiv'>
                    <div className='bottomdashboardheading'>
                        <h6>Check Table</h6>
                    </div>
                    <div className='bottomdashboardtable'>
                        <table>
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>PROGRESS</th>
                                    <th>QUANTITY</th>
                                    <th>DATE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="bottomdashboardtablecheck">
                                            <input type="checkbox" id="horizon-ui-pro" />
                                            <label htmlFor="horizon-ui-pro">Horizon UI PRO</label>
                                        </div>
                                    </td>
                                    <td>17.5%</td>
                                    <td>2,458</td>
                                    <td>24 Jan 2021</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="bottomdashboardtablecheck">
                                            <input type="checkbox" id="project-x" />
                                            <label htmlFor="project-x">Project X</label>
                                        </div>
                                    </td>
                                    <td>45%</td>
                                    <td>1,234</td>
                                    <td>15 Feb 2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='bottomdashboardseconddiv'>
                    <div className='bottomdashboardseconddivheading'>
                        <div className='bottomdashboardsecondleftcontent'>
                            <span>Daily Traffic</span>
                            <h6>2.579 <span>Visitors</span></h6>
                        </div>
                        <div className='bottomdashboardsecondrightcontent'>
                            <IoMdArrowDropup color='#01B529' />
                            <p>+2.45%</p>
                        </div>
                    </div>
                    <div>
                        <div id="chart">
                            <ReactApexChart options={options} series={series} type="bar" height={250} />
                        </div>
                    </div>
                </div>
                <div className='bottomdashboardthirddiv'>
                    <div className='bottomdashboardthirddivheading'>
                        <input type="checkbox" name="" id="" />
                        <h6>Skill Catagory</h6>
                    </div>
                    <div className='bottomdashboardthirddivcontent'>
                        <div className='bottomdashboardthirddivcheck'>
                            <input type="checkbox" name="" id="" />
                            <h6>Cricket</h6>
                        </div>
                        <div className='bottomdashboardthirddivcheck'>
                            <input type="checkbox" name="" id="" />
                            <h6>Cricket</h6>
                        </div>
                        <div className='bottomdashboardthirddivcheck'>
                            <input type="checkbox" name="" id="" />
                            <h6>Cricket</h6>
                        </div>
                        <div className='bottomdashboardthirddivcheck'>
                            <input type="checkbox" name="" id="" />
                            <h6>Cricket</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BottomDashboard