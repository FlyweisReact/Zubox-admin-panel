/** @format */

import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";

const CountryCity = () => {
  // Sample data array
  const data = [
    {
      country_name: "India",
      city_name: "Amritsar",
    },
    {
      country_name: "Pakistan",
    },
    {
      country_name: "China",
    },
    {
      country_name: "Russia",
    },
    {
      country_name: "USA",
    },
    {
      country_name: "Europe",
    },
    {
      country_name: "Sri-Lanka",
    },
    {
      country_name: "England",
    },
    {
      country_name: "Canada",
    },
    {
      country_name: "Australia",
    },
    {
      country_name: "Ukraine",
    },
  ];
  return (
    <>
      <Navbar text={"Country & City"} />
      <div className="logocontainer">
        <div className="logosubcontainer">
          <div className="logoleftcontainer">
            <div className="logolefticon">
              <GiPlainCircle color="#000000" />
              <div className="logoleftheading">
                <h6>Country</h6>
              </div>
            </div>

            <div className="cellContainer">
              <table>
                <thead>
                  <tr>
                    <th>Country Name</th>
                    <th>City List</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.country_name}</td>
                      <td>List</td>
                      <td>
                        <div className="logoleftlastrightbutton">
                          <button style={{ color: "#EFC42E" }}>Edit</button>
                          <button style={{ color: "#FF0000" }}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cellpagination">
              <p>
                <span style={{ background: "#000000", color: "#F5F5F5" }}>
                  1
                </span>
                <span>2</span>
                <span>3</span>
                <span>...</span>
                <span>67</span>
                <span>68</span>
              </p>
            </div>
          </div>
          <div className="addcellcontainerright">
            <div className="addcellicon">
              <GiPlainCircle color="#000000" />
              <div className="logoleftheading">
                <h6>Add City</h6>
              </div>
            </div>
            <div className="addcellinputscontainer">
              <div className="addcellinputes">
                <label htmlFor="">Country Name *</label>
                <input type="text" />
              </div>
              <div className="addcellinputes">
                <label htmlFor="">City Name</label>
                <input type="text" />
              </div>
            </div>
            <div className="celladdbutton">
              <div className="logoleftlastrightbutton">
                <button>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryCity;
