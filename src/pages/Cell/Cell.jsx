/** @format */

import React from "react";
import { GiPlainCircle } from "react-icons/gi";
import Navbar from "../../components/Navbar/Navbar";

const Cell = () => {
  // Sample data array
  const data = [
    {
      cell_Name: "Travel",
      number_of_members: 12,
    },
    {
      cell_Name: "1",
      number_of_members: 8,
    },
    {
      cell_Name: "2",
      number_of_members: 20,
    },
    {
      cell_Name: "3",
      number_of_members: 12,
    },
    {
      cell_Name: "4",
      number_of_members: 8,
    },
    {
      cell_Name: "4",
      number_of_members: 20,
    },
    {
      cell_Name: "5",
      number_of_members: 12,
    },
    {
      cell_Name: "6",
      number_of_members: 8,
    },
    {
      cell_Name: "7",
      number_of_members: 20,
    },
    {
      cell_Name: "8",
      number_of_members: 20,
    },
    {
      cell_Name: "9",
      number_of_members: 20,
    },
    {
      cell_Name: "10",
      number_of_members: 20,
    },
  ];
  return (
    <>
      <Navbar text={"Cell"} />
      <div className="logocontainer">
        <div className="logosubcontainer">
          <div className="logoleftcontainer">
            <div className="logolefticon">
              <GiPlainCircle color="#000000" />
              <div className="logoleftheading">
                <h6>Cell</h6>
              </div>
            </div>

            <div className="cellContainer">
              <table>
                <thead>
                  <tr>
                    <th>Cell Name</th>
                    <th>Number of Members</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.cell_Name}</td>
                      <td>{item.number_of_members}</td>
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
                <h6>Add Cell</h6>
              </div>
            </div>
            <div className="addcellinputscontainer">
              <div className="addcellinputes">
                <label htmlFor="">Select Parent Cell*</label>
                <input type="text" />
              </div>
              <div className="addcellinputes">
                <label htmlFor="">Cell Name*</label>
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

export default Cell;
