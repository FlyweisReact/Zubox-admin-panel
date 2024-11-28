/** @format */

import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";

const Places = () => {
  // Sample data array
  const data = [
    {
      cell_Name: "Amritsar",
    },
    {
      cell_Name: "Delhi",
    },
    {
      cell_Name: "Noida",
    },
    {
      cell_Name: "Gurgaon",
    },
    {
      cell_Name: "Dehradun",
    },
    {
      cell_Name: "Shimla",
    },
    {
      cell_Name: "Chandigarh",
    },
    {
      cell_Name: "Hyderabad",
    },
    {
      cell_Name: "Andra Pradesh",
    },
    {
      cell_Name: "Agra",
    },
    {
      cell_Name: "Chennai",
    },
  ];
  return (
    <>
       <Navbar text={"Places"} />
      <div className="logocontainer">
        <div className="logosubcontainer">
          <div className="logoleftcontainer">
            <div className="logolefticon">
              <GiPlainCircle color="#000000" />
              <div className="logoleftheading">
                <h6>Places List</h6>
              </div>
            </div>

            <div className="cellContainer">
              <table>
                <thead>
                  <tr>
                    <th>Place Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.cell_Name}</td>
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
                <h6>Create Place</h6>
              </div>
            </div>
            <div className="addcellinputscontainer">
              <div className="addcellinputes">
                <label htmlFor="">Place Name *</label>
                <input type="text" />
              </div>
              <div className="addcellinputes">
                <label htmlFor="">Place Latitude *</label>
                <input type="text" />
              </div>
              <div className="addcellinputes">
                <label htmlFor="">Place Longitude *</label>
                <input type="text" />
              </div>
            </div>
            <div className="celladdbutton">
              <div className="logoleftlastrightbutton">
                <button>Submit</button>
                <button style={{ color: "#FF0000" }}>Reset</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
